var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
var app = express();
const multer = require("multer");
const fs = require("fs");
const axios = require("axios");
const speech = require("@google-cloud/speech");

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public", "media"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const chatGPTApiKey = "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";
const client = new speech.SpeechClient();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, "public")));

app.get("/media/:id", (req, res) => {
  const mediaFilePath = path.join(__dirname, "./public/media/" + req.params.id);
  res.sendFile(mediaFilePath);
});

// Set up static file serving for the 'public' directory

// Define a route to serve the HTML file with the form
app.get("/voice-note-form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "./voice-note-form.html"));
});

// app.post("/upload-voice-note", upload.single("voiceNote"), (req, res) => {
//   const voiceNote = req.file;
//   res.send(`Voice note received: ${voiceNote.originalname}`);
// });

async function transcribeLocalAudioFile(file) {
  // Read the audio file as a buffer
  // const fileBuffer = fs.readFileSync(filePath);

  // The audio file's encoding, sample rate in hertz, and BCP-47 language code
  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: 16000,
    languageCode: "en-US",
  };
  const audio = {
    content: file,
  };

  const request = {
    audio: audio,
    config: config,
  };

  console.log(`Transcription:-`);
  try {
    // Detects speech in the local audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map((result) => result.alternatives[0].transcript)
      .join("\n");
    console.log(`Transcription: ${transcription}`);
  } catch (error) {
    console.log(error);
    console.error("Error transcribing audio:", error.message);
  }
}

app.post("/upload-voice-note", upload.single("voiceNote"), async (req, res) => {
  const voiceNotePath = req.file.path;

  // Convert voice note to text using Google Cloud Speech-to-Text
  try {
    // const [result] = await speechClient.recognize({
    //   config: {
    //     encoding: "LINEAR16",
    //     sampleRateHertz: 16000,
    //     languageCode: "en-US",
    //   },
    //   audio: {
    //     content: fs.readFileSync(voiceNotePath).toString("base64"),
    //   },
    // });

    // const transcription = result.results
    //   .map((result) => result.alternatives[0].transcript)
    //   .join("\n");
    // console.log("Transcription:", transcription);

    const localAudioFilePath = path.join(__dirname, voiceNotePath);
    console.log(localAudioFilePath);
    let file = fs.readFileSync(voiceNotePath).toString("base64");
    let k = await transcribeLocalAudioFile(file);

    // Call ChatGPT API with the transcribed text
    const chatGPTResponse = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: transcription },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${chatGPTApiKey}`,
        },
      }
    );

    // Extract and send the reply from ChatGPT
    const chatGPTReply = chatGPTResponse.data.choices[0].message.content;
    res.send(
      `Voice note received and transcribed: ${transcription}\n\nChatGPT Reply: ${chatGPTReply}`
    );
  } catch (error) {
    console.error("Error processing voice note:", error.message);
    res.status(500).send("Internal Server Error");
  } finally {
    // Remove the uploaded voice note file
    fs.unlinkSync(voiceNotePath);
  }
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});

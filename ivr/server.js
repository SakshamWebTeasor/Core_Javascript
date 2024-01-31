app.get('/media', (req, res) => {
    const mediaFilePath = path.join(__dirname, 'path-to-your-media-file'); // Replace with the actual path to your media file
    res.sendFile(mediaFilePath);
  });
  
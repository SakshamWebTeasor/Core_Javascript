// Promise, Async Await

let i = 0;

const theArray = [
  {
    name: "user1",
    age: 24,
    height: 5.8,
    hobbies: ["coding", "reading mangas"],
  },
  {
    name: "user2",
    age: 26,
    height: 6.1,
    hobbies: ["watching shows", "coding"],
  },
];

let data = [
  {
    name: "user3",
    age: 26,
    height: 6.1,
    hobbies: ["watching shows", "reading mangas"],
  },
];

const myPromise = (myArray) => {
  setInterval(() => {
      console.log(i++);
  },1000)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(...myArray);
      let error = false;
      if (error) {
        reject("not added");
      } else {
        resolve(data);
      }
    }, 1000);
  });
};

function getMyArray() {
  setTimeout(() => {
    console.log(theArray);
  }, 1000);
}

// Using Promises
myPromise(theArray)
  .then((data) => {
    getMyArray();
    console.log(data.sort((a, b) => a.age - b.age));
  })
  .catch((error) => {
    console.log(error);
  });

// Using Async Await
// const myData = async (myArray, callback) => {
//   try {
//     const data = await myPromise(myArray);
//     callback();
//     console.log(data.sort((a, b) => a.age - b.age));
//   } catch (error) {
//     console.log(error);
//   }
// };

// myData(theArray, getMyArray);

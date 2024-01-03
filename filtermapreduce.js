const myArray = [
  {
    name: "user1",
    age: 25,
    height: 5.8,
    hobbies: ["coding", "reading mangas"],
  },
  {
    name: "user2",
    age: 24,
    height: 6.1,
    hobbies: ["watching shows", "coding"],
  },
  {
    name: "user3",
    age: 26,
    height: 6.1,
    hobbies: ["watching shows", "reading mangas"],
  },
];

// forEach
myArray.forEach((element) => {
  console.log(element.age);
})

// map
const getAgeArray = myArray.map((element) => element.age)
console.log("getAgeArray",getAgeArray);

// filter
const userabove25 = myArray.filter((element) => element.age >= 25)
console.log("userabove25",userabove25);

// sort
const sortedUser = myArray.sort((a, b) => a.age - b.age)
console.log("sortedUser",sortedUser);

// reduce
const totalAge = myArray.reduce((a, b) => a + b.age, 0)
console.log("totalAge",totalAge);
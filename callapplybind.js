const userDetail1 = {
  name: "user1",
  age: 24,
  height: 5.8,
  hobbies: ["coding", "reading mangas"],
  printDetailFromObject: function () {
    console.log(this.name, this.age, this.height, this.hobbies);
  },
};

const userDetail2 = {
  name: "user2",
  age: 26,
  height: 6.1,
  hobbies: ["watching shows", "coding"],
};

// Call: it is used to call a function with some arguments
// userDetail1.printDetailFromObject();
// userDetail1.printDetailFromObject.call(userDetail2);
function printDetailFromOutsideObject(...rest) {
  console.log(
    this.name,
    "is",
    "years old",
    this.age,
    [...rest].length > 0 ? "from" : "",
    [...rest].map((e) => "" + e).join(", ")
  );
}
// printDetailFromOutsideObject.call(userDetail1,"motia city","zirakpur")
// printDetailFromOutsideObject.call(userDetail2)

// Apply: it is used to call a function with some arguments as an array
printDetailFromOutsideObject.apply(userDetail1, ["motia city", "zirakpur"]);

// Bind: it is used to create a new function with some arguments
let myNewFunc = printDetailFromOutsideObject.bind(
  userDetail2,
  "motia city",
  "zirakpur"
);
myNewFunc();

// Currying Understanding

function AddMy3Numbers(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(AddMy3Numbers(1)(2)(3));


// Real life use-case

const myObject = {
  name: "Saksham",
  age: 24,
  height: 5.7,
  call: function () {
    console.log(`hello from ${this.name}`);
  },
};

function userInfo(obj) {
  return function (userinfo) {
    if (userinfo == "call") return obj[userinfo].call(obj);
    else return obj[userinfo];
  };
}

console.log(userInfo(myObject)("name"));


// Infinite Currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

console.log(add(1)(2)(3)(4)(5)());

function sum(...args) {
    //calculates sum
  return args.reduce((a, b) => a + b, 0);
}

function calc(i) {
    // fetches all natural number smaller than equal to i & call function sum
  let nums = [];
  for (let j = 1; j <= i; j++) {
    nums.push(j);
  }
  return sum(...nums);
}

const memoize = (fun) => {
  // used for memoization
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache", cache);
      return cache[n]; // returning from cache
    } else {
      let result = fun(n);
      console.log("calculating first time");
      cache[n] = result; // caching
      return result;
    }
  };
};

const efficient = memoize(calc);
// first execution
console.time();
console.log(efficient(10100));
console.log(efficient(10900));
console.timeEnd();

// second execution
console.time();
console.log(efficient(10100));
console.log(efficient(10900));
console.timeEnd();

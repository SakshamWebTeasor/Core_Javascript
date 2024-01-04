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
console.log(efficient(11110));
console.log(efficient(11111));
console.log(efficient(11112));
console.timeEnd();

// second execution
console.time();
console.log(efficient(11112));
console.log(efficient(11111));
console.log(efficient(11110));
console.timeEnd();




function fibonacciWithMemoization() {
  const cache = {}; // in lexical scope & will retain its value

  return function memoizedFibonacci(n) {
    if (n <= 1) {
      return n;
    }

    // Check if the result is already cached
    if (cache[n] !== undefined) {
      return cache[n];
    }
    
    // Calculate the result and store it in the cache
    cache[n] = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    console.log(n, cache[n]);
    if(n ==15){
        console.log(cache);
    }
    return cache[n];
  };
}

const memoizedFibonacci = fibonacciWithMemoization();

console.log(memoizedFibonacci(15)); // Output: 610
console.log(memoizedFibonacci(5)); // Output: 5
console.log(memoizedFibonacci(10)); // Output: 55
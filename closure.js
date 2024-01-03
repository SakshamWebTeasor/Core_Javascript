// Closure: is a function that remembers its outer variables

function outerFunc(...rest) {
  const x = "Hello There"; //outer variables: x & all params in outerFunc
  return function innerFunc(c) {
    //inner variable: c
    let sumOfParamsOfouterFunc = rest.reduce((a, b) => a + b);
    console.log(x, sumOfParamsOfouterFunc, sumOfParamsOfouterFunc + c); // innerFunc retains value of rest & x
  };
}

let myFunc = outerFunc(5, 6);

myFunc(7);

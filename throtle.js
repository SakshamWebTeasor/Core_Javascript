const myThrottle = (fn, delay) => {
  return function (...args) {
    document.getElementById("button").disabled = true;
    setTimeout(() => fn(), delay);
  };
};

const newFunc = myThrottle(() => {
  document.getElementById("button").disabled = false;
  console.log("button Clicked");
}, 1000);

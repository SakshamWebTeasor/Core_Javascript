const betterFunction = debounce(fetchData, 300);

function myInputChange(e) {
  //   console.log(document.getElementById("input").value);
  //   fetchData();
  betterFunction();
}

let counter = 0;

function fetchData() {
  console.log("fetching data", counter++);
}

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

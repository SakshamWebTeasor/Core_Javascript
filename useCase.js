let myArray = [1, 2, 3, 4, 2];

// Set
let obj = new Set(myArray); // set only accepts unique values
obj.delete(2); // will identify key & delete from set
obj.add(5); // will add key_value to set
console.log(obj.entries()); // will return iterator like: SetIterator {1 => 1, 3 => 3, 4 => 4, 5 => 5} & make it like a map
console.log(obj.has(3)); // will return true or false
console.log(obj.keys()); // will return iterator keys only
console.log(obj.values()); // will return iterator values only
obj.clear(); // will clear set


// Map
let tempVal;
let myMap = new Map([
  [1, "val1"],
  [2, "val2"],
  [3, "val3"],
  [4, "val4"],
  [5, "val5"],
]); // map accepts key_value pairs
const result = myArray
  .map((a, index) => {
    if (index % 2 === 0) {
      if (index === myArray.length - 1) {
        return [a];
      }
      tempVal = a;
      return;
    } else {
      return [tempVal, a];
    }
  })
  .filter((a) => a !== undefined);
const result2 = myArray.map((a, index) => index % 2 === 0 ? index === myArray.length - 1 ? [a] : ((tempVal = a), undefined) : [tempVal, a]).filter((a) => a !== undefined);
const myMap2 = new Map(result);
myMap.delete(2); // will identify key & delete from map
myMap.set(6, "val6"); // will add key_value to map
console.log(myMap.entries()); // will return iterator like: MapIterator {1 => "val1", 3 => "val3", 4 => "val4", 5 => "val5", 6 => "val6"} & make it like a map
console.log(myMap.has(3)); // will return true or false
console.log(myMap.values(2)); // will return iterator values only
console.log(myMap.keys()); // will return iterator keys only
console.log(myMap, myMap2);
// myMap.clear(); // will clear map



// WeakSet
const ws = new WeakSet(); // weakset only accepts unique object values
let objs1 = {"d": "4"};  // objs & {"d": "4"} are 2 different objects
ws.add(objs1)
console.log(ws.has(objs1)); // ws.has({"d": "4"}) wont ever return true
console.log(ws);


// WeakMap
const wm = new WeakMap(); // weakmap also accepts unique object values
let objs2 = {"d": "4"};
let objs3 = {"d": "5"};
wm.set(objs2, "val1")
wm.set(objs3, "val2")
console.log(wm.get(objs2));
console.log(wm);
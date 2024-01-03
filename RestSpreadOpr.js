
// Rest Operator in array
function addNumbers(a, b, ...otherValues) { // a, b as first two arguments & all `rest` of the values accepted in array otherValues using `...`
  return (
    a +
    b +
// Spread Operator in array
    [...otherValues] // otherValues is spreaded using `...` & then surround with `[]` for again converting into an array
        .reduce(  // reduce the array
            (a, b) => a + b, // function for sum of 2 value
            0 // initial value
        )
  );
}

console.log(addNumbers(10, 20, 30, 40, 50));


// Rest Operator in object
const myObject = {
    name: "saksham",
    age: 24,
    height: 5.8,
    hobbies: ['watching shows', 'coding', 'reading mangas']
}
function showObjectNameAndOtherDetails(passedObject) {
    const {name, age, ...restOfTheThingsInObject} = passedObject // name & age are accepted as it is & all `rest` of the object values accepted in object restOfTheThingsInObject using `...` from passedObject
    return ({myName:name, myOtherDetails:{...restOfTheThingsInObject, height: 6.1}}); // showObjectNameAndOtherDetails is spreaded using `...` & then surround with `{}` for again converting into an object & override the height
}
  
console.log(showObjectNameAndOtherDetails(myObject));
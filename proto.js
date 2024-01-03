let myObj = {
    name: "saksham",
    age: 24,
    height: 5.8,
    hobbies: ['watching shows', 'coding', 'reading mangas']
}

let newObj = {
    name:"newUser",
    __proto__:myObj
}


// Object Prototype will appear like:-
console.log(newObj)
// {name: 'newUser'}
//     name:"newUser"
//     [[Prototype]]: Object
//         age: 24
//         height: 5.8
//         hobbies: (3) ['watching shows', 'coding', 'reading mangas']
//         name: "saksham"
//         [[Prototype]]: Object
//             constructor: ƒ Object()
//             hasOwnProperty: ƒ hasOwnProperty()
//             isPrototypeOf: ƒ isPrototypeOf()
//             propertyIsEnumerable: ƒ propertyIsEnumerable()
//             toLocaleString: ƒ toLocaleString()
//             toString: ƒ toString()
//             valueOf: ƒ valueOf()
//             __defineGetter__: ƒ __defineGetter__()
//             __defineSetter__: ƒ __defineSetter__()
//             __lookupGetter__: ƒ __lookupGetter__()
//             __lookupSetter__: ƒ __lookupSetter__()
//             __proto__: (...)
//             get __proto__: ƒ __proto__()
//             set __proto__: ƒ __proto__()






const array = [myObj];

//Array Prototype will appear like:-
console.log(array);
// [{…}]
//     0: {name: 'saksham', age: 24, height: 5.8, hobbies: Array(3)}
//     length: 1
//     [[Prototype]]: Array(0)
//         at: ƒ at()
//         concat: ƒ concat()
//         constructor: ƒ Array()
//         copyWithin: ƒ copyWithin()
//         entries: ƒ entries()
//         every: ƒ every()
//         fill: ƒ fill()
//         filter: ƒ filter()
//         find: ƒ find()
//         findIndex: ƒ findIndex()
//         findLast: ƒ findLast()
//         findLastIndex: ƒ findLastIndex()
//         flat: ƒ flat()
//         flatMap: ƒ flatMap()
//         forEach: ƒ forEach()
//         includes: ƒ includes()
//         indexOf: ƒ indexOf()
//         join: ƒ join()
//         keys: ƒ keys()
//         lastIndexOf: ƒ lastIndexOf()
//         length: 0
//         map: ƒ map()
//         pop: ƒ pop()
//         push: ƒ push()
//         reduce: ƒ reduce()
//         reduceRight: ƒ reduceRight()
//         reverse: ƒ reverse()
//         shift: ƒ shift()
//         slice: ƒ slice()
//         some: ƒ some()
//         sort: ƒ sort()
//         splice: ƒ splice()
//         toLocaleString: ƒ toLocaleString()
//         toReversed: ƒ toReversed()
//         toSorted: ƒ toSorted()
//         toSpliced: ƒ toSpliced()
//         toString: ƒ toString()
//         unshift: ƒ unshift()
//         values: ƒ values()
//         with: ƒ with()
//         Symbol(Symbol.iterator): ƒ values()


const NumArray = new [1,2,3,4];

Array.prototype.convertArrayToObject = function () {
    let newObj = {}
    this.forEach((element) => {
        newObj[element] = element;
    });
}

console.log(NumArray.convertArrayToObject());
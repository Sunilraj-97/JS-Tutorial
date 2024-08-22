const marvelHeros = ["Ironman", "Thor", "spiderman"]
const dcHeros = ["Batman", "Flash", "Superman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros); // [ 'Ironman', 'Thor', 'spiderman', [ 'Batman', 'Flash', 'Superman' ] ]    ❌

const all_heros = marvelHeros.concat(dcHeros)
// console.log(all_heros); // [ 'Ironman', 'Thor', 'spiderman', 'Batman', 'Flash', 'Superman' ]    ❌


// using [...]spread operator is better way to join two or more arrays
const allHeros = [...marvelHeros, ...dcHeros]
// console.log(allHeros);  //  [ 'Ironman', 'Thor', 'spiderman', 'Batman', 'Flash', 'Superman' ]  ✔️


const myNewArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const myAnotherNewArray = myNewArray.flat(1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
// const myAnotherNewArray = myNewArray.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]
const myAnotherNewArray = myNewArray.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] //infinity means we don't no how many depth is there
// console.log(myAnotherNewArray);

// ***************************************************************************************************************************************************************************

// Array.isArray() static method determines whether the passed value is an Array

// Array.isArray(value)
// value : The value to be checked.

// console.log(Array.isArray("Sunil")) // false 

// console.log(Array.from("Sunil")); // [ 'S', 'u', 'n', 'i', 'l' ]

// console.log(Array.from({ name: "Sunil" })); // [] this doesn't know what to print (key or value) that is why is showing []

let score = 100
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score,score1,score2,score3))








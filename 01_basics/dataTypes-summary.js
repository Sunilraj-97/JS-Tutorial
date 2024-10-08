//****************** */ Primitive *************************

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
// console.log(typeof score); //number

const scoreValue = 100.3
// console.log(typeof scoreValue); //number


const isLoggedIn = false
// console.log(typeof isLoggedIn); //boolean
const outsideTemp = null
// console.log(typeof outsideTemp); //object

let userEmail; // undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(typeof anotherId);


// console.log(id === anotherId); // false

const bigNumber = 34543534534534343n

// console.log(typeof bigNumber); //bigint




//************** */ Reference (Non primitive) *******************

// Array, Objects, Functions

const heros = ["Raju", "sunilraj", "hulk"]
// console.log(typeof heros); // object

const values = {
    name: "Sunil",
    age: 22
}

// console.log(typeof values); // object

const myFunction = function () {
    console.log("Hello Sunil");
}

// console.log(typeof myFunction) // function

// https://262.ecma-international.org/5.1/#sec-11.4.3


// *************************** Heap ** Stack *********************************************

// There are two types of memory
// 1.Satck (Primitive)  

let myName = "Sunilraj"

let myAnotherName = myName
myAnotherName = "Hemanth"

console.log(myName);
console.log(myAnotherName);

// 2.Heap (Reference or Non Primitive)

let userOne = {
    name: "Sunil",
    age: 23
}

let userTwo = userOne

userTwo.name = "Hemanth"

console.log(userOne);
console.log(userTwo);




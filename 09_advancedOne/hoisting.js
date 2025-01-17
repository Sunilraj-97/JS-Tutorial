// Hoisting in JavaScript is a built-in behaviour process of accessing a variables and functions 
// even before we have initialized it or we have put some value in it.

// or 

// Hosting in javaScript is a behavior where variable and function declarations are moved to the top of 
// their scope during the compilation phase, before the code is executed.

// Hoisting with var

// console.log(a); // undefined
// var a = 5;
// console.log(a); // 5

// Here, var a; is hoisted to the top, so the first console.log doesn't throw an error but prints undefined.

// Hoisting with let and const

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 15;

// For let and const, variables are in a "temporal dead zone" from the start of the block until their declaration is encountered.

// Temporal Dead Zone is a area of a block where a varible is inaccessible until the moment the computer completely initialize it with a value


// Hoisting with Functions

// greet(); // "Hello!"
// function greet() {
//   console.log("Hello!");
// }

// Entire function declarations are hoisted, so the function greet is available before its definition.

// Function Expressions

// sayHello(); // TypeError: sayHello is not a function
// var sayHello = function() {
//   console.log("Hi!");
// };

// Here, var sayHello; is hoisted, but the assignment sayHello = function() {...} is not. This results in a TypeError.



// myName();
// console.log(name);

var name 
name = "Sunil";
console.log(myName)


function myName() {
    console.log("Namaste Sunil")
}





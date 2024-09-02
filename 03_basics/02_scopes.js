// let a = 10
// const b = 20
var c = 300

let a = 300 // Global scope

if (true) {
    // let a = 10  // Local scope
    const b = 20
    var c = 30
    // console.log(a);
}

//  If i use let variables inside of this block and log outside of the block then  // ReferenceError: a is not defined
//  If i use const variables inside of this block and log outside of the block then  // ReferenceError: a is not defined

// console.log(a);
// console.log(b);
// console.log(c);



// ************************ Nested Function ****************************

function one() {
    const userName = "Sunil"

    function two() {
        const website = "abcd"
        console.log(userName); // Here two is child function and it can access parent function
    }
    // console.log(website); // Here website is the child function variable and it can not be accessed outside of the two function
    two()
}
// one()

// ********************* Interesting *******************

// Hoisting is the only main difference between function defination and the function expression

// This is function defination


function addOne(num) {
    return num + 1
}
console.log(addOne(5));

// This is functional expression


const addTwo = function (num) {
    return num + 2
}

console.log(addTwo(6));
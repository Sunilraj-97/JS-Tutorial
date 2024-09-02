// let a = 10
// const b = 20
 var c = 300

 let a = 300 // Global scope

if (true) {
    // let a = 10  // Local scope
    const b = 20
    var c = 30
    console.log(a);
}

//  If i use let variables inside of this block and log outside of the block then  // ReferenceError: a is not defined
//  If i use const variables inside of this block and log outside of the block then  // ReferenceError: a is not defined

console.log(a);
// console.log(b);
console.log(c);

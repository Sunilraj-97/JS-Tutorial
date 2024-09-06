// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Syntax

// let myPromise = new Promise(function(resolve, reject) {
//     // Asynchronous code goes here
//   });

// You are creating a new instance of the Promise object. The new Promise() constructor requires a function (known as the executor function) that takes two arguments:

// resolve: A function to call when the asynchronous operation is successful.
// reject: A function to call when the asynchronous operation fails.


// Difference Between Promises and Callbacks:

// 1. Control Flow & Readability:
// Callbacks: Require you to pass functions as arguments to handle asynchronous results. However, when multiple asynchronous operations are chained together, it can lead to "callback hell" — deeply nested, hard-to-read code.
// Promises: Provide a cleaner, more readable way to chain asynchronous operations, reducing callback nesting and making code easier to maintain.

// 2.Error Handling:
// Callbacks: Each callback function needs its own error handling, leading to repeated code and higher complexity.
// Promises: Have a unified way of handling errors using catch(). You can chain .then() calls, and if any step in the chain fails, the catch() method will handle the error.

// 4. Return Value:
// Callbacks: Cannot return values directly because the result is handled inside the callback function.
// Promises: Return a promise object immediately, allowing further chaining and returning values in a more predictable manner.


const promiseOne = new Promise(function (resolve, reject) {
    // DB connections,
    setTimeout(function () {
        console.log("Async task is complete");
        resolve()
    }, 2000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})


new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async taks 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Promise 2 resolved');
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ userName: "Sunil", age: 23 })
    }, 2000)
})

promiseThree.then(function (user) {
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ userName: "Sunil", password: "123456" })
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.password
}).then((adcd) => {
    console.log(adcd);
}).catch((error) => {
    console.log("Error", error);
}).finally('The promise is either resolved or ejected')


// async and await are modern JavaScript keywords and they allow you to write asynchronous 
// code in a more readable and synchronous-looking manner without using .then() and .catch() methods directly.

// 1.The async keyword is used to declare an asynchronous function.
// 2.An async function automatically returns a promise.
// 3.Inside an async function, you can use the await keyword to pause the execution of the function until a promise is resolved or rejected.
// 4.If the promise is rejected, the function throws the error, which can be caught using a try-catch block.

// When to Use async/await:

// When you have sequential asynchronous tasks that depend on one another.
// When you want to handle errors more elegantly using try-catch without chaining multiple .catch() statements.
// When you prefer cleaner and more readable code over promise chaining. 

// console.log(typeof(typeof 1));  // string


const promiseFive = new Promise((resolve, reject) => {
    let error = false
    if (!error) {
        resolve({ userName: "Javascript", password: "123456" })
    } else {
        reject('ERROR: something went wrong')
    }
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// const getAllUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log("DATA", data);
}).catch((error) => console.log("ERROR:", error))



// fetch

// The fetch is a global method and start the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available

// A fetch() promise only rejects when a network error is encountered and does not reject on HTTP errors(404,etc)

// REFERENCE  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



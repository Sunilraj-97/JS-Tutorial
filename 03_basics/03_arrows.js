const user = {
    userName: "Sunil",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.userName}, Welcome to website`);
        // console.log(this);

    }
}

// user.welcomeMessage()
user.userName = "Suni"
// user.welcomeMessage()
// console.log(this); //{} (empty object) when we log only this because our js engine using node 


// function mango() {
//     const userName = "Sunil"
//     console.log(this.userName); // undefined
// }
// mango() // we should not use this keyword inside the function


// const mango = function () {
//     const userName = "Sunil"
//     console.log(this.userName); // undefined
// }
// mango() 

const mango = () => {
    // console.log(this);
}
mango()

// const addTwo = (num1,num2) => {
//     return num1+num2  
// }
// console.log(addTwo(7,8));

// const addTwo = (num1, num2) => num1 + num2  // ✔️

// const addTwo = (num1, num2) => (num1 + num2)  // ✔️

// const addTwo = (num1, num2) => {userName = "Sunil} // undefined // ❌

const addTwo = (num1, num2) => ({ userName: "Sunil" })  // { userName: 'Sunil' } // ✔️
console.log(addTwo(7, 8));
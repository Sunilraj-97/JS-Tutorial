function myName() {
    console.log("S");
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("L");
}

// myName()

// function addTwoNumber(num1, num2) {
//     return num1 + num2
// }
// console.log(addTwoNumber(56, 98))

function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // return result;
    return num1 + num2;
}

// const result1 = addTwoNumber(5, 6)

// console.log("RESULT", result1);

// console.log(addTwoNumber(5, 9));

function loginUserDetail(userName) {
    if (!userName) {
        console.log("Please enter user name");
        return
    }
    return `${userName} is just logged in`
}
// console.log(loginUserDetail("Sunil"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400))

const user = {
    userName: "Sunil",
    price: "free"
}

function handleObject(anyObject) {
    return `My name is ${anyObject.userName} and course price is ${anyObject.price}`
}

// console.log(handleObject(user));
// or 
// console.log(handleObject({
//     userName: "Sunil",
//     price: "free"
// }));


const myArray = [100, 200, 300, 400]

function returnSecondElement(anyArray) {
    return anyArray[1]
}

// console.log(returnSecondElement(myArray));
// or
console.log(returnSecondElement([100, 200, 300, 400]));







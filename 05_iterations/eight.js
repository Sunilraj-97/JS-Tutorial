

const myNuber = [1, 2, 3, 4, 5]

const totalNum = myNuber.reduce(function (acc, currVal) {
    // console.log(`acc: ${acc} and curr: ${currVal}`);
    return acc + currVal
}, 0)

// console.log(totalNum);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const amountToBePay = shoppingCart.reduce((acc, item) => {
    return acc + item.price
}, 0)

// or

// const amountToBePay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(amountToBePay);

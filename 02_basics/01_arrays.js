// Arrays

const myArr = [0, 1, 2, 3, 4, 5]

// const myHeros = ["Raju", 'Sunil']

// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr.length);

// ------------------------------------------------

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)
// myArr.shift()
// myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(5));

// ------------slice  splice----------------

// slice()
// slice(start)
// slice(start,end)

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)

console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]
console.log(myArr.slice(1, 3)) // [ 1, 2 ]
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ] After using slice original array will not be manipulated
console.log(myArr.splice(1, 3)) // [ 1, 2, 3 ]
console.log("C", myArr); //  [ 0, 4, 5 ] After using splice original array will be manipulated



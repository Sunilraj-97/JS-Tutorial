const myArr = [1, 2, 3, 4, 5]

for (const val of myArr) {
    //console.log(`My array value is ${val}`);
}

const greetings = "Hello Sunil"

for (const name of greetings) {
    // console.log(name)
}

// Map

const map = new Map()
map.set("IN", "INDIA")
map.set("ENG", "ENGLAND")
map.set("BNG", "BANGLADESH")
map.set("SRI", "SRILANKA")

for (const key of map) {
    // console.log(key);
    // output
    // [ 'IN', 'INDIA' ]
    // [ 'ENG', 'ENGLAND' ]
    // [ 'BNG', 'BANGLADESH' ]
    // [ 'SRI', 'SRILANKA' ]
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    name: "SUNIl",
    age: "20"
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);  // using forof loop  "myObject is not iterable"
}
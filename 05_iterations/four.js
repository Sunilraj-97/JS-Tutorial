const myObject = {
    name: "Sunil",
    email: "suni@abcd.com",
    age: 20
}

for (const key in myObject) {
    // console.log(`${key} is the question for ${myObject[key]}`);
}


const myArr = ['js', 'cpp', 'rb', 'cn', 'node']

for (const arr in myArr) {
    // console.log(arr);  // This will return index 0,1,2,3,4
    // console.log(myArr[arr]);
}


const map = new Map()
map.set("IN", "INDIA")
map.set("ENG", "ENGLAND")
map.set("BNG", "BANGLADESH")
map.set("SRI", "SRILANKA")

for (const key in map) {
    // console.log(key);  // This Map will not work in forin loop
}
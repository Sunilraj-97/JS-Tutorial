let myName = "Sunil    "
let myEmail = "sunil@google.com"

// Now i want to find every string length at a time that is my challenge 

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength()
"sunil@google.com".trueLength()

console.log(myName.length)

// console.log(myName.trueLength); 

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


// Inside the above object,array and string sunil method is not there but if you want put sunil method in all the object, array and string you have to use Object.prototype

Object.prototype.sunil = function () {
    console.log('Sunil is available in all the object')
}

// heroPower.sunil() //Object
// myHero.sunil()  //Array
// myEmail.sunil() //string 

Array.prototype.heySunil = function () {
    console.log('Sunil from the array method')
}
// heroPower.heySunil()  //❌ TypeError: heroPower.heySunil is not a function
// myHero.heySunil() //✔️

// inheritance

const User = {
    name: "Sunil",
    email: "sunil@google.com"
}

const husband = {
    name1: "Raju",
    profession: "Engineer",
    age: 30
}

//  Using (__proto__) is old way to inheritance

const wife = {
    name: "Sowbhagya",
    __proto__: husband // wife inherits from husband
}

// console.log(wife.profession); //Engineer


const type = {
    class: "MiddleClass",
    __proto__: (husband, wife)
}

// console.log(type.name1)

type.__proto__ = User // Full details of user will inherit into the type object


// modern syntax

Object.setPrototypeOf(wife, husband)

// console.log(wife.age)


// let anotherUsername = "ChaiAurCode     "

// String.prototype.trueLength = function () {
//     console.log(`${this}`);
//     console.log(`True length is: ${this.trim().length}`);
// }

// anotherUsername.trueLength()
// "hitesh".trueLength()
// "iceTea".trueLength()

console.log(this);

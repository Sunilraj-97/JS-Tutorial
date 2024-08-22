// 1.singleton
// Object.create()

// 2.object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Sunil",
    "full_Name": "Sunil Kumar D R",
    [mySym]: "myKey1",
    age: 22,
    location: "Bengaluru",
    email: "sunil@gogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name); // Sunil
// console.log(jsUser["name"]); // Sunil
// console.log(jsUser["full_Name"]); // Sunil Kumar D R
// console.log(jsUser[mySym]); //  myKey1

// console.log(jsUser); 
// {
//     name: 'Sunil',
//     full_Name: 'Sunil Kumar D R',
//     age: 22,
//     location: 'Bengaluru',
//     email: 'sunil@netflix.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'myKey1'
//   }


jsUser.email = "sunil@netflix.com"
// Object.freeze(jsUser)
jsUser.email = "sunil@amazon.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello from the JS user");
}
jsUser.greeting1 = function () {
    console.log(`Hello from the JS user! ${this.name} `);
}

console.log(jsUser.greeting()); // Hello from the JS user
console.log(jsUser.greeting1()); // Hello from the JS user! Sunil








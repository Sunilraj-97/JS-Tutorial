class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Logger name is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addMe() {
        console.log(`course added by ${this.username}`)
    }
}

const user = new Teacher('Sunil', 'sunil@google.com', "123abc")

const user2 = new User('Raj', 'raj@netflix.com', "8965qwe")

user.addMe()  // ✔️
// user.logMe()  // ❌

// user2.addMe()  // ❌ TypeError: user2.addMe is not a function

user2.logMe() // ✔️

console.log(user === user2);  // false
console.log(user === Teacher);  // false

console.log(user instanceof Teacher);  // true
console.log(user instanceof User);  // true




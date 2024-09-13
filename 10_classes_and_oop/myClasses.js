class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("Sunil", "sunil@google.com", "12345")
const user1 = new User("Sunilraj", "sunil@google.com", "12345")

console.log(user.encryptPassword());
console.log(user1.changeUsername());

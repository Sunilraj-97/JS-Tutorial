
// .call() is a method that allows you to call a function with a specified this context and arguments. It is particularly useful when you want to explicitly set the value of this in a function

// When to Use .call()
// Reusing Functions: If you have a function defined on one object, you can reuse it for another object by changing the this value.


function setUsername(username) {
    this.username = username
}

// Here setUsername is executing like normal function inside the call stack to take the reference of setUsername we are using .call(this)

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const user = new createUser("Sunil", "sunil@google.com", "12345")

console.log(user);




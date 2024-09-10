const user = {
    userName: "Sunil",
    email: "sunil@google.com",
    age: 26,
    getUserDetails: function () {
        // console.log("Got user details from Database");
        console.log(`Username is: ${this.userName}`);
        // console.log(this);
    }
}

// console.log(user.userName);
console.log(user.getUserDetails());

function User(username, email, age) {
    // console.log(username,email,age);
    this.username = username  // this.username is variable we can give anything
    this.email = email
    this.age = age

    return this
}
// const userOne = User('Sunil', 'sunil@google.com', 27);
// const userTwo = User('Sunilraj', 'sunil@netflix.com', 28);

// console.log(userOne); // {  username: 'Sunilraj', email: 'sunil@netflix.com',  age: 28} here iam trying to print
//  userOne data but it userTwo data beacause userTwo is overriding the userOne data why because we are using new keyword

const userOne = new User('Sunil', 'sunil@google.com', 27);
const userTwo = new User('Sunilraj', 'sunil@netflix.com', 28);

console.log(userOne); // User { username: 'Sunil', email: 'sunil@google.com', age: 27 }
console.log(userTwo); // User { username: 'Sunilraj', email: 'sunil@netflix.com', age: 28 }

// Key points on new keyword

// 1.New object is being created {}
// 2.Constructor function called because of the new keyword 
//  -> Now what it does is that it packs all your arguments inside it and gives it to you
// 3.this keyword whatever arguments you have written get injected inside it
// 4.you get it inside the function        



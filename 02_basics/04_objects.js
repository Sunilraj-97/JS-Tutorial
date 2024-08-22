// const tinderUser = new Object() // Singleton object
// console.log(tinderUser); // {}

const tinderUser = {} // non singleton object
// console.log(tinderUser); // {}

tinderUser.id = "Suni123"
tinderUser.name = "Sunil"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sunil@google.com",
    fullName: {
        userFullName: {
            firstName: "Sunil",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = { obj1, obj2 } // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = { ...obj1, ...obj2 } // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ 'Suni123', 'Sunil', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', 'Suni123' ], [ 'name', 'Sunil' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

const course = {
    coureName: "Javascript",
    price: "999",
    courseInstructor: "Sunil"
}

// console.log(course.courseInstructor); // Sunil

const { courseInstructor: instructor } = course // if u r lazy to write long name like 'courseInstructor' then use like this { courseInstructor: instructor } 

console.log(instructor);







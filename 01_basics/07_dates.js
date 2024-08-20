// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Tue Aug 20 2024 11:32:02 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Aug 20 2024
// console.log(myDate.toISOString()); // 2024-08-20T11:34:25.086Z
// console.log(myDate.toLocaleString()); // 8/20/2024, 11:36:00 AM
// console.log(myDate.toLocaleTimeString());  // 11:46:00 AM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // specific date // when month is single digit then month starts from 0 (january)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
// let myCreatedDate = new Date(2024,0,23,5,3) // specific date and time 
// console.log(myCreatedDate.toLocaleString()); // 1/23/2024, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-23")
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM

let myCreatedDate = new Date("01-14-2023") //mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString()); //1/14/2023, 12:00:00 AM



let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1724155349299
// console.log(myCreatedDate.getTime()); // 1673654400000  // if you want to convert date to milliseconds

// console.log(Math.floor(Date.now()/1000)); // convert milliseconds to seconds

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

let my = newDate.toLocaleString('default', {
    weekday: "long", // Tuesday
})

console.log(newDate);

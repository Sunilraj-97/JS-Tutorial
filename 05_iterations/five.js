// forEach

const coding = ['js', 'cpp', 'c#', 'java', 'react', 'node']


// Normal function
coding.forEach(function (item) {
    // console.log(item);
})


// Arrow function
coding.forEach((item) => {
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})


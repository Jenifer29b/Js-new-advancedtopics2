// Asynchrous function : it doesn't wait for code that exceute later.. like settimeout
// it exceutes other code

//Because JavaScript is non-blocking, it doesn’t wait for the data to finish collecting.
//So you pass a callback → a function to run when the work is done.

console.log("Start")

setTimeout(() => {
    console.log("Execute after 2s") // it doesn't stop here it exceutes the next console .. it waits until the callstack is empty
}, 2000)
console.log("end")

// it first exceuts the callback function and then it moves to settimeout(async)
function sayhello(name, callback) {
    console.log("Welcome to Asynchrous Function")
    callback(name)
}

function greet(name) {
    console.log("Welcome here",name)
}
sayhello("Jeni",greet)

//callback
function mycalculator(num1, num2, callback) {
    let sum = num1 + num2
    callback(sum)
}

function displayer(sum) {
    console.log("The Sum is",sum)
}

mycalculator(5,5,displayer) // we dont need to use displayer() function symbol when it insides another function

// callback with async

function collectdata( callback) {
    console.log("Data Collecting...")
    setTimeout(() => {
        let data = { name: "jeni", place: "Madurai" }
        callback(data) // callback collects the data and it tranfers to callback func after 2s 
    },2000)
    console.log("Data ongoing ...")
}

function receive(data) {
    console.log("Data Received",data)
}


collectdata(receive)

// callback hell : contains multiple async functions it imposible to read and maintain

setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
        setTimeout(() => {
           console.log("Hello")
    },2000)
    },2000)
    },2000)
},2000)
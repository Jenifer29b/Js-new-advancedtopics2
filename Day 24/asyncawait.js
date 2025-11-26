//async function automaticallly returns a promise
//await can only be used inside an async function.
//await tells JavaScript:
// Stop here until the promise resolves Then give me the resolved value
//It allows you to write asynchronous code that looks like normal synchronous code.

function promise1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 running")
            resolve(num)
        }, 1000);
    })
}

function promise2(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2 running")
            resolve(num*10)
        }, 1000);
    })
}
// promise code here
// promise1(10)
//     .then((num1) => {
//         console.log("the result of step1", num1)
//         return promise2(num1)
//     })
//     .then((num2) => {
//         console.log("the result of step2", num2)
        
//     })

// async code 
async function run() {
    try {
        let result1 = await promise1(10)
        console.log(result1)

        let result2 = await promise2(result1)
        console.log(result2)
        
    }
    catch (err) {
        console.log(err)
    }
}
run()

// await means:
// Pause the async function until the promise finishes,
// but do NOT block the rest of the program.

async function run1(){
    console.log(1)
    let result = await new Promise((res) => setTimeout(()=>res(2)),2000)
    console.log(result)
    console.log(4) // after finishing the await promise this console will prints
}
console.log(3)
run1()
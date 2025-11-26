//values in promise chaining

// function promise1(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 1 running")
//             resolve(num)
//         }, 1000);
//     })
// }

// function promise2(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 2 running")
//             resolve(num*10)
//         }, 1000);
//     })
// }
// promise1(10)
//     .then((num1) => {
//         console.log("the result of step1", num1)
//         return promise2(num1)
//     })
//     .then((num2) => {
//         console.log("the result of step2", num2)
        
//     })

//example : bankbaance

function bankbalance(amt) {
    return new Promise((resolve, reject) => {
        if (amt < 0) {
            reject()
        } else {
            resolve(amt)
        }
    })
}

function addamount(amt) {
    return new Promise((resolve, reject) => {
        if (amt < 0) {
            reject()
        } else {
            resolve(amt*5)
        }
    })
}


bankbalance(1000)
    .then((amt) => {
        console.log("before adding", amt)
        return addamount(amt)
    })
    .then((amt2) => console.log("after add Balance :", amt2))
    .catch(()=>console.log("Insufficient Balance"))
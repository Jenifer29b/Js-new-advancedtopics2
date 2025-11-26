//task1
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello Promise")
            resolve()
        }, 2000);
    })
}
promise()
    .then()
    .catch((err) => console.log(err))

    //task2
function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1")
            resolve()
        }, 1000);
    })
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 2")
            resolve()
        }, 2000);
    })
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 3")
            resolve()
        }, 3000);
    })
}

promise1()
    .then(() => promise2())
    .then(() => promise3()) 
    .catch((err) => console.log(err))
     //task 3
function adds(number) {
    return new Promise((resolve, reject) => {
        resolve(number)
    })
}
function multi(number) {
    return new Promise((resolve, reject) => {
        resolve(number*2)
    })
}
function add(number) {
    return new Promise((resolve, reject) => {
        resolve(number+5)
    })
}

adds(10)
    .then((res1) => {
        console.log("actual number", res1)
        return multi(res1)
    })
    .then((res2) => {
        console.log("after multiples", res2)
        return add(res2)
    })
    .then((res3) => {
        console.log("end adds", res3)
    })
    .catch((err) => {
            console.log(err)
    })
        //task4
    async function runprocess(){
    try{
        let result1 = await adds(10)
        console.log("actual Number",result1)
         let result2 = await multi(result1)
        console.log("after multiplies",result2)
         let result3 = await add(result2)
        console.log("end adds",result3)
        
    }
    catch(err){
        console.log(err)
    }
}
runprocess()

//task5
function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step1 completed")
            resolve()
        },1000)
    })
}
function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step2 completed")
            resolve()
        },2000)
    })
}
function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Step3 completed")
            resolve()
        },3000)
    })
}

async function runsteps(){
    await step1()
    await step2()
    await step3()
}
runsteps()

//task6

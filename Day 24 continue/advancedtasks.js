function api1() {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 2)
        if (rand == 1) {
            resolve("API 1 resolved")
        } else {
            reject("API 1 rejected")
        }
    })
}
function api2() {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 2)
        if (rand == 1) {
            resolve("API 2 resolved")
        } else {
            reject("API 2 rejected")
        }
    })
}
function api3() {
    return new Promise((resolve, reject) => {
        let rand = Math.floor(Math.random() * 2)
        if (rand == 1) {
            resolve("API 3 resolved")
        } else {
            reject("API 3 rejected")
        }
    })
}
Promise.any([api1(), api2(), api3()])
    .then((val) => console.log("Promise any", val))
    .catch((err) => console.log(err))
    
function serverA(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
             resolve("resolved serverA")
        },1000)
    })
}
function serverB(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("resolved serverB")
        },2000)
    })
}
function serverC(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("resolved serverC")
        },3000)
    })
}

Promise.race([serverA(),serverB(),serverC()])
   .then((val)=>console.log(val))
   .catch((err)=>console.log(err))
Promise.race([serverB(),serverC()])
   .then((val)=>console.log(val))
   .catch((err)=>console.log(err))
   
   


function sA(num,name){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
             resolve({ message : "resolved serverA",value : num,name : name})
        },1000)
    })
}
function sB(num){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve(`resolved serverB ${num}`)
        },2000)
    })
}
function sC(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("resolved serverC")
        },3000)
    })
}

async function runprocess(){
 let result =    await (Promise.all([sA(10,"serverA"),sB(20),sC()]))
 console.log("Promise any:",result)
}
runprocess()
   
   



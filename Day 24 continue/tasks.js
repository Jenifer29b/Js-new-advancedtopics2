function prom1(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("first Number",num)
        }, 1000);
    })
}
function prom2(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second Number",num*2)
        }, 2000);
    })
}
function prom3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("third Number")
    
        }, 3000);
    })
}
Promise.all([prom1(10), prom2(10),prom3(20)])
    .then((val) => console.log("Promise all :",val))
    .catch((err) => console.log(err))
     
function p1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("first Number")
            reject("error occurred")
        }, 1000);
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error occurred in P2")
        }, 2000);
    })
}
function p3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("third Number")
        }, 3000);
    })
}
Promise.allSettled([p1(10), p2(10),p3(20)])
    .then((val) => console.log(val))
    .catch((err) => console.log(err))

Promise.any([p1(), p2(), p3()])
         .then((val) => console.log("Promise any:",val))
        .catch((err) => console.log(err))
                


     
function Pro1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First resolves")
        }, 1000);
    })
}
function Pro2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("second resolves")
        }, 2000);
    })
}
Promise.race([Pro1(), Pro2()])
    .then((value) => console.log("promise race:", value))
    .catch((err)=>console.log(err))
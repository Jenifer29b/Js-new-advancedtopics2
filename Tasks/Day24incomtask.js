//promise chaining
function add(num) {
    return new Promise((resolve, reject) => {
        resolve(num)
    })
}
function double(num) {
    return new Promise((resolve, reject) => {
        resolve(num*10)
    })
}
function minus(num) {
    return new Promise((resolve, reject) => {
        resolve(num-10)
    })
}

add(10)
    .then((num) => double(num))
    .then((num) => minus(num))
    .then((res) => console.log("final result", res))
    .catch((err) => console.log(err))
    
async function runcalc() {
    let res1 = await add(10)
    let res2 = await double(res1)
    let res3 = await minus(res2)
    console.log("final result using async",res3)
}
runcalc()

//promise.all and allsetted

function p1() {
    return new Promise((resolve, reject) => {
        resolve("promise1 resolved")
    })
}
function p2() {
    return new Promise((resolve, reject) => {
        resolve("promise2 resolved")
    })
}
function p3() {
    return new Promise((resolve, reject) => {
        resolve("promise3 resolved")
    })
}
Promise.all([p1(), p2(), p3()])
    .then((val) => console.log("Promise all", val))
    .catch((err) => console.log(err))
    
Promise.allSettled([p1(), p2(), p3()])
    .then((val) => console.log("Promise all", val))
    
//promise.race

function pr1() {
    return new Promise((resolve, reject) => {
        resolve("promise1 resolved")
    })
}
function pr2() {
    return new Promise((resolve, reject) => {
        resolve("promise2 resolved")
    })
}
Promise.race([pr1(), pr2()])
    .then((val) => console.log("promise race", val))
  .catch((err) => console.log(err))
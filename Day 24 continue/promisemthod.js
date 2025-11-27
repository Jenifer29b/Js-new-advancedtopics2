//promise.all : returns a single promise.. if any one promise rejects all the promises are rejected
// else it returned a single promise
function P1() {
    return new Promise((resolve, reject) => {
        resolve("hello from P1")
    })
}
function P2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("error occurred")
            resolve("Hello from P2")
        }, 1000);
    })
}
function P3() {
    return new Promise((resolve, reject) => {
       resolve("Hello from P3")
    })
}
Promise.all([P1(),P2(),P3()])
    .then((values) => console.log("Promise.all",values))
    .catch((err) => console.log("one rejects", err))

//Promise.allsettled : returns as a array.it waits  until the promise resolves or rejected
// never rejects itself .. 
    
Promise.allSettled([P1(), P2(), P3()])
    .then((val) => console.log("Promise allsettled",val))
    .catch((err) => console.log(err))
      
//Promise.race : returns a first resolved value either resolve or reject
// first resolved promise value wil returned

function pro1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("first hello")
            reject("error occurred")
        }, 1000);
    })
}
function pro2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("second hello")
        }, 2000);
    })
}
Promise.race([pro1(), pro2()])
    .then((res) => console.log("Promise race", res))
    .catch((err) => console.log(err))

//Promise.any : return the first fullified promises .. it doesn't care about rejects only resolves accepted
// only if all the promise rejects ... it results with aggregate error
       
Promise.any([pro1(), pro2()])
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
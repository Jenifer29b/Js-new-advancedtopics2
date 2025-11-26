function Promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Helo!! welcome")
            resolve()
        }, 1000);
    })
}
Promise1()
    .then()
    .catch()
    
function Promise2() {
    return new Promise((resolve, reject) => {
        let random = Math.floor(Math.random() * 2)
        
        if (random == 0) {
            setTimeout(() => {
                console.log("success!!")
                resolve()
            }, 1000);
        } else {
           
                console.log("unsuccess!!")
                reject()
           
        }
    })
}

Promise2()
    .then(()=>console.log("promise resolved"))
    .catch(() => console.log("promise rejected"))
    
function Prom1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step1 completed")
            resolve()
        }, 1000);
    })
}
function Prom2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2 completed")
            resolve()
        }, 1000);
    })
}
function Prom3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step3 completed")
            resolve()
        }, 1000);
    })
}

Prom1()
    .then(() => Prom2())
    .then(() => Prom3())
    .then(() => console.log("All three completed"))
    .catch()
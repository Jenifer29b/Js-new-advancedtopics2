//Promise chaining

function mypromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello")
            resolve()
        }, 1000);
    })
}
mypromise()
    .then(()=>console.log("Welcome back to async"))
    .catch(() => console.log("error occured"))

// value passing to resolve :

function price(amt) {
    return new Promise((resolve, reject) => {
        if (amt < 1000) {
            resolve(amt)
        } else {
            reject(amt)
        }
    })
}

price(999)
    .then((amt) => console.log("You can buy this product", amt))
    .catch((amt) => console.log("It is so costly", amt))
    

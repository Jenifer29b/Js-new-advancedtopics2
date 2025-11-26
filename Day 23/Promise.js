let mypromise = new Promise((resolve, reject) => {
    console.log("Task started")
    setTimeout(() => {
       resolve("Task completed successfully")
   },2000)
})

mypromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("task ended"))


function ticketbooking() {
    return new Promise((resolve, reject) => {
        let booking = true;

        if (booking) {
            resolve(580)
        } else {
            reject()
        }
    })
}
ticketbooking()
    .then((amt) => console.log("ticket booked",amt))
    .catch(() => console.log("Booking failed"))


//Promise chaining :

//(define the promise)
function mypromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("helo welcome back jeni") 
            resolve()
        }, 1000);
    })
}

function mypromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("helo welcome back ruban") 
            resolve()
        }, 1000);
    })
}
//handers:(access the promise) 
mypromise()
    .then(() => mypromise2())
    .then(()=>console.log("Welcome both of u"))
    .catch(()=>console.log("error"));
    
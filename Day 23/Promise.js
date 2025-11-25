


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


    console.log(Math.floor(Math.random()*2))
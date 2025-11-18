//Error handling makes your program safe and prevents it from crashing when something wrong happens.
// dealing with the mistakes in our code

// try and catch is used to handle error in js
try {
    console.log(a) // code that makes an error
} catch (error) {
    console.log("Name :", error.Name) // if an error happen catch block excetus ..
    console.log("Message :", error.message)
    console.log("Error founded") // we cal access the error and just console it

} finally {
    console.log("error found") // finally block is used to exceute for final console showing done message
}
//custom error means we are creating an error 
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by 0"); // error message (custom error)
    } 
    return a / b
    
}

try {
    let result = divide(10, 0)
    console.log("This is not console",result)
} catch (error) {
    console.log("Error founded",error.message)
}


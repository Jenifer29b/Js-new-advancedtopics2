class EmptyTaskError extends Error{
    constructor(message) {
        super(message)
        this.name = "EmptyTaskError"
    }
}

class Checkduplicate extends Error{
    constructor(message) {
        super(message),
            this.name = "CheckDuplicate"
    }
}

let tasks = [];

function Addtask(title) {
    if (title.length == 0) {
        throw new EmptyTaskError("Task title cannot be empty")
    } 

    let exists = tasks.some((task) => task.toLowerCase() === title.toLowerCase())

    if (exists) {
        throw new Checkduplicate("Title Already Exists")
    }

        tasks.push(title)
        console.log("Task Added :",title)
    
}

function Showtask() {
    if (tasks.length == 0) {
        console.log("No Tasks Available")
    } else {
        console.log(tasks)
    }
}





try {
    Addtask("Learn Javascript")
    Showtask()
    
    Addtask("learn javascript")

} catch (error) {
    if (error instanceof EmptyTaskError) {
        console.log("name", error.name)
        console.log("message", error.message)
    } else if (error instanceof Checkduplicate) {
         console.log("name", error.name)
        console.log("message", error.message)
    } else {
         console.log("name", error.name)
        console.log("message", error.message)
    }
   
    
}





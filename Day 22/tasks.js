function SetAge(age) {
    if (age < 0 || age > 120) {
        throw new Error("Age not Proper")
    }
    console.log("Age Checked",age)
}

try {
    SetAge(23)
} catch (error) {
    console.log("Message:", error.message)
    console.log("Name:",error.name)
}

class PasswordError extends Error{
    constructor(message) {
        super(message)
        this.name = "PasswordError"
    }
}

function CheckPassword(pass) {
    if (pass.length > 6) {
        console.log("Password Checked", pass)
        return 
    } 
    throw new PasswordError("Check password should be greater than 6")
} 

try {
    CheckPassword("12345")
} catch (error) {
    if (error instanceof PasswordError) {
        console.log("Message" , error.message)
    } else {
        console.log("other Message" , error.message)
    }
}

// multiple errors

class UsernameError extends Error{
    constructor(message) {
        super(message)
        this.name = "UsernameError"
    }
}

class Passwordcheck extends Error{
    constructor(message) {
        super(message)
        this.name = "PasswordError"
    }
}

function Loginerror(username, password) {
    if(username.length === 0 ){
        throw new UsernameError("username not empty")
    } else if (password.length < 6) {
        throw new Passwordcheck("Password should be greater than 6")
    } else {
        console.log("Login successfull")
    }
}

try {
    Loginerror("jeni","1234567")
} catch (error) {
    if (error instanceof UsernameError) {
        console.log("user message" ,error.message)
    }else if (error instanceof Passwordcheck) {
        console.log(" pass message" ,error.message)
    }else {
        console.log("message" ,error.message)
    }
}
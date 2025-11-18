class validationerror extends Error{
    constructor(message) {
        super(message)
        this.name = "validationerror"
    }
}

function checkage(age){
    if (age < 18) {
        throw new validationerror("Age should be greater than 18")
    }
    console.log("Elligble to Vote")
}

try {
    checkage(16)
    console.log("checked")
} catch (error) {
    console.log("Message", error.message)
    console.log("error name" , error.name)
}

// email checking
// instanceof means checks whether the object is belongs to that class or not

class EmailError extends Error{
    constructor(message) {
        super(message)
        this.name = "EmailError"
    }
}

function Checkemail(id) {
    if (id.includes("@")) {
        console.log("email checked")
    } else {
        throw new EmailError("Email has to be checked")
    }
}

try {
    Checkemail("jeni@123")
} catch (error) {
    if (error instanceof EmailError) {
        console.log("Name", error.name)
    console.log("Message", error.message)
    
    } else {
        console.log(" other Name", error.name)
    console.log("other Message", error.message)
    }
}

// Password checking

class PasswordError extends Error{
    constructor(message) {
        super(message)
        this.name = "PasswordError"
    }
}

function checkpassword(pass) {
    if (pass.length < 6) {
        throw new PasswordError("Password should be greater than 6")
    }
    console.log("Password Checked")
}

try {
    checkpassword("12345")
} catch (error) {
    if (error instanceof PasswordError) {
        console.log("Name", error.name)
        console.log("Message" , error.message)
    } else {
        console.log("other Name", error.name)
        console.log("other Message" , error.message)
    }
}

// login

class LoginError extends Error{
    constructor(message) {
        super(message)
        this.name = "LoginError"
    }
}

function checklogin(email, password) {
    if (email.includes("@") && password.length > 6) {
        console.log("Login Successfull")
        return
    }
    throw new LoginError("Check the email and password")
}

try {
    checklogin("jeni@123","1234567")
    
} catch (error) {
    if (error instanceof LoginError) {
        console.log("Name ", error.name)
        console.log("message",error.message)
    }
}
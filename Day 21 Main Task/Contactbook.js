class ContactBook{
    constructor() {
        this.contact=[]
    }

    Addcontact(Name,PhoneNo,Email) {
        this.contact.push({ Name, PhoneNo, Email })
        console.log("Phone Number Added",Name)
    }
    displaycontact() {
        console.log("Display All Contact:",this.contact)
    }
    Contactlength() {
        console.log("Total Length :",this.contact.length)
    }
    Findcontact(name) {
        let find = this.contact.find((value)=> value.Name == name)
        console.log(find ? "Contact Found"  : "Contact not found")
    }
    Removecontact(name) {
        let index = this.contact.findIndex((value) => value.Name === name)
        if (index !== -1) {
            this.contact.splice(index, 1)
            console.log("Contact Deleted" , name)
        } else {
            console.log("Contact Not found")
        }
        
    }
}

let details = new ContactBook();
details.Addcontact("Ruban", 12345, "ruba10@gmail.com")
details.Addcontact("Jeni",23456,"Jeni@gmail.com")
details.displaycontact()
details.Contactlength()
details.Findcontact("Ruban")
details.Removecontact("Ruban")
console.log(details)
details.Addcontact("Justin", 23456, "Justin@gmail.com")
console.log(details)
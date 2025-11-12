let obj = {
    name: "Jeni",
    age: 23,
    place : "chennai"
}
let obj2 = {
    learns : "Javascript"
}
for (let entries of Object.entries(obj)) {
    console.log(entries)
}

console.log(Object.keys(obj).length)


class Book{
    constructor(title, book,author) {
        this.title = title,
            this.book = book
        this.author = author
    }
    get bookdetail() {
        console.log(`${this.book} by ${this.author}`)
    }
}

let bookdetails = new Book("Love Story", "Remeo and Juliet", "William Shakesapre")

console.log(bookdetails)

bookdetails.bookdetail

class tourdetails{
    constructor() {
        this.list =[]
    }

    addlist(name,age,classroom) {
        this.list.push({ name, age, classroom })
    }
    
}

let studentdetails = new tourdetails()
studentdetails.addlist("ruban", 21, "Class A")
studentdetails.addlist("Jeni",21,"Class B")
console.log(studentdetails)


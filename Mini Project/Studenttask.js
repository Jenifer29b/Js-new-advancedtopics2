class StudentMarks{
    constructor(name,age,[...grade]) {
        this.name = name,
            this.age = age,
            this.grade = grade
        
    }
    Averagegrade() {
       let average =   this.grade.reduce((prev, curr) => {
           return  prev+curr
       }, 0)
        let length = this.grade.length
        let totalaverage = (average / length).toFixed(2)
        this.average = totalaverage  // is used to store in info
        
    }
    
    ispassed() {
        let status = this.average >= 50 ? "Passed" : "Failed"
        this.status = status
    }

    get details() {
        return `Name : ${this.name} Age : ${this.age} Average : ${this.average} Status: ${this.status}`
    }

     static Totalcount() {
        let length = students.length
        console.log("Total Students Marks :", length)
    }

    static Findstudent(name) {
        let find = students.find((value) => value.name == name) ? `Student Finded : ${name} `: "Student Not found"
        console.log(find)
    }
    
    static Removestudent(name) {
        let index = students.findIndex((value) => value.name == name)
        if (index  !== -1) {
            students.splice(index, 1)
            console.log("Student Deleted :" , name)
        } else {
            console.log("Student not found")
         }
    }

    static Passstudent(students) {
        let Passed = students.filter((value) => value.average > 50)
        console.log("Passed Students : ")
        Passed.forEach((student) => {
             console.log("Name :" , `${student.name}`, "Status:" ,`${student.status}`)
         })
    }
    
    static Topstudent(students) {
        let topper = students.reduce((prev, curr) => {
            return (prev.average) > (curr.average) ? prev : curr
        }, 0)
        console.log("Topper Student : ")
        console.log("Name :" , `${topper.name}`, "Average :" ,`${topper.average}`)
    }
}
let students = [];

let s1 = new StudentMarks("Ruban", 21, [70, 80, 90])
let s2 = new StudentMarks("Ravi", 25, [20, 70, 40])
let s3 = new StudentMarks("Ram", 23, [60, 70, 80])
students.push(s1,s2,s3)
console.log(students)


students.forEach((student) => {
    student.Averagegrade()
    student.ispassed()
    console.log(student.details)
    
})

StudentMarks.Totalcount(students)
StudentMarks.Findstudent("Ruban")
StudentMarks.Removestudent("Ravi")
console.log(students)
StudentMarks.Passstudent(students)
StudentMarks.Topstudent(students)
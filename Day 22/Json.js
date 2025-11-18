// json is just tha data is used to store and send the data between frontend and backend
//Json = Javascript Object Notation
// which is similar to object but with strict rules

let obj = {
    name: "ruban",
    age: 20,
    place : "Madurai"
}
let json = JSON.stringify(obj) // convert obj into jsonstring
console.log(json)

let convertobj = JSON.parse(json)
console.log(convertobj) // convert jsonstring to object
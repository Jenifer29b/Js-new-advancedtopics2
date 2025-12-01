//Es6 Features:

//Arrow functions : without function keyword and function name
let add = (a, b) => {
    return a+b
}
console.log(add(5, 10))

//Template literal : we can access the data by using ${}
let name = "Ruban"
console.log(`Hello Welcome ${name}`)

//default parameter : if we didn't give parameter if automatically takes value by default
// it automatically takes the value by default 1.
function double(a, b=1) {
    return a*b
}
console.log(double(5))

// destructure
let arr = [1, 2, 3, 4, 5]
let value = [arr[1], arr[2]]
console.log(value)

let obj = {
    name: "Jeni",
    age : 21
}
//spread operator
let obj1 = { ...obj ,place : "Madurai"}
console.log(obj1)

//rest operator :
function rest(...numbers) {
    return numbers.reduce((prev,curr)=>prev+curr,0)
}
console.log(rest(1,2,3,4,5))

//Map and set
//Map : It is used to map the key value pair

let map = new Map()
map.set("Name", "Jeni")
map.set("Place", "Madurai")
console.log(map.size)

for (let [key,value] of map) {
    console.log("Values", value)
    console.log("keys", key)
}

map.forEach((values,keys) => {
    console.log(`${keys} : ${values}`)
})

// console.log(map.get("Name")) // returns the value
// console.log(map.has("Name")) // return the boolean value whether it exists or not
// console.log(map.clear()) // deletes the all the value in map
// console.log(map)

//set : it is used to adding the unique values in an array

let set = new Set()

set.add(1);
set.add(2)
set.add(1) // removes duplicated 
console.log(set)

console.log(set.has(1))
console.log(set.clear())
console.log(set)
 

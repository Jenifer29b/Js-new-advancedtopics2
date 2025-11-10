let num = [1, 2, 3, 4, 5, 6]

let double = num.filter((value) => value % 2 == 0).map((value) => value*2)
console.log(double)

let names = ["Jeni", "Jenifer", "Ruba", "Ruban"]

let find = names.find((value) => value.length > 4)
console.log(find)

let nums = [12, 13, 14, 50, 45, 60, 60, 90]

let sum = nums.filter((value) => value >= 50).reduce((prev,curr) => prev+curr)
console.log(sum)


// strings

let sen = "Hello Welcome"

let firstle = sen.split(" ").map((word)=> word.charAt(0))
console.log(firstle)

let word = "Hello Welcome to Javascript"

let replace = word.replace("Javascript", "JS")
console.log(replace)

let number = "98";

let pad = number.padStart(5, "0")
console.log(pad)
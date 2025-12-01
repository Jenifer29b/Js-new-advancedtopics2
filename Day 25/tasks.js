let person = {
    name: "Name",
    age: 21,
    introduce: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}
console.log(person.introduce())



function sum(a, b, c) {
    return (a+b+c)
}
let add = sum.apply(null,[1, 2, 3])
console.log(add)

let user = {
    name: "Alex",
    greet: function () {
        console.log(`Good Morning ${this.name}`)
    }
}
let details = user.greet.bind(user)
details()

let car1 = { brand: "Toyota", showBrand: function() { console.log(`brand from :${this.brand}`); } };
let car2 = { brand: "Honda" };

car1.showBrand.call(car2)


function multiply(a, b) {
    let c = a * b
    return c
}

let double = multiply.bind(null , 2)
console.log(double(5))




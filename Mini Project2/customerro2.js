class ProductNotFoundError extends Error{
    constructor(message) {
        super(message),
            this.name = "ProductNotFoundError"
    }
}

let products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Mouse", stock: 10 },
  { id: 3, name: "Keyboard", stock: 0 }
]

function FindProduct(id) {
    let find = products.find((value) => value.id == id)
    

    if (!find) {
        throw new ProductNotFoundError("Product not found")
    }
    console.log("Product finded",find.name)
    
}

function ShowProduct() {
    if (products.length === 0) {
        console.log("No Product Found")
    } else {
        console.log("Products are",products)
    }
}



try {
    FindProduct(4)
   
    
} catch (error) {
    console.log("Name", error.name)
    console.log("Message",error.message)
    
}

 ShowProduct()
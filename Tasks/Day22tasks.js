//Json Task

function Jsonparse(json) {
  try {
    let convert = JSON.parse(json);
    console.log("Name:", convert.Name);
    console.log("Place :", convert.Place);
  } catch (error) {
    console.log("Error Unable to prase Javascript");
  }
}
Jsonparse('{"Name":"Ruban","Place":"Madurai"}') // valid json format
Jsonparse({ "Name": "Ruban", "Place": "Madurai" }) // invalid json format

// bank error

class BankError extends Error{
    constructor(message) {
        super(message)
        this.name = "Bankerror"
    }
}

class BankAccount{
    constructor(balance) {
        this.balance = balance
  }
  
}

class Addamount extends BankAccount{
  constructor(balance) {
       super(balance)
  }
  
  amount(price) {
    this.balance+=price
  }

}

let details = new Addamount(1000)
details.amount(1000)
console.log(details)


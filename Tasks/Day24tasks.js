function Placefood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Placed...", name);
      resolve(name);
    }, 1000);
  });
}
function Preparefood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("food Prepared...", name);
      resolve(name);
    }, 2000);
  });
}
function deliverfood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Order Delivered...", name);
      resolve(name);
    }, 3000);
  });
}
// using .then()
Placefood("Burger")
  .then(() => Preparefood("Burger"))
  .then(() => deliverfood("Burger"))
  .catch((err) => {
    console.log(err);
  });

// using async and await

async function hotel() {
  try {
    await Placefood("Pizza");
    await Preparefood("Pizza");
    await deliverfood("Pizza");
  } catch (err) {
    console.log("Error ocuurred", err);
  }
}
hotel();

 
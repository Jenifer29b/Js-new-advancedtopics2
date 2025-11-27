function getuser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getting User...");
    }, 3000);
  });
}
function getpost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getting Post...");
    }, 2000);
  });
}
function getcomments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("getting Comments...");
    }, 1000);
  });
}

Promise.all([getuser(), getpost(), getcomments()])
  .then((res) => console.log("Promise all :", res))
  .catch((err) => console.log(err));

function p1() {
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 2);

    if (rand == 1) {
      resolve("Promise fullfilled 1");
    } else {
      reject("Promise Rejected 1");
    }
  });
}
function p2() {
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 2);

    if (rand == 1) {
      resolve("Promise fullfilled 2");
    } else {
      reject("Promise Rejected 2");
    }
  });
}
function p3() {
  return new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random() * 2);

    if (rand == 1) {
      resolve("Promise fullfilled 3");
    } else {
      reject("Promise Rejected 3");
    }
  });
}
Promise.allSettled([p1(), p2(), p3()])
  .then((val) => console.log(val))
    .catch((err) => console.log(err));
  
function serverA(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            rejects("error occurred")
        },1000)
    })
}
function serverB(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("resolved serverB")
        },2000)
    })
}
function serverC(){
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            resolve("resolved serverC")
        },3000)
    })
}

Promise.any([serverA(),serverB(),serverC()])
   .then((val)=>console.log("Promise any",val))
   .catch((err)=>console.log(err))

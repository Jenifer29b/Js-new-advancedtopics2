//Nesting here
//callback:

function call1(callback) {
    setTimeout(() => {
        console.log("Step1 callback")
        callback()
    }, 1000);
}

function call2(callback) {
    setTimeout(() => {
        console.log("Step2 callback")
        callback()
    }, 1000);
}

function call3(callback) {
    setTimeout(() => {
        console.log("Step3 callback")
        callback()
    }, 1000);
}

call1(() => {
    call2(() => {
        call3(() => {
           console.log("All step finished")
       })
   })
})

//promise :

function Promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step1")
            resolve()
        }, 1000);
        
    })
}
function Promise2() {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log("step2")
        }, 1000);
        resolve()
    })
}
function Promise3() {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
            console.log("step3")
        }, 1000);
        resolve()
    })
}

Promise1()
    .then(() => Promise2())
    .then(() => Promise3())
    .then(()=>console.log("all steps completed"))
    .catch(() =>console.log("error occured"))
    

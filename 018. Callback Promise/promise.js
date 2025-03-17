console.log("Hello, Callback Promise!");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
        reject("random number is rejecting you");
    }
    else {        
        setTimeout(() => {
            console.log("Inside setTimeout");
            resolve("Dattu");
        }, 1000);
    }    
});

// prom1.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5) {
        reject("random number is rejecting you 2");
    }
    else {        
        setTimeout(() => {
            console.log("Inside setTimeout 2");
            resolve("Dattu 2");
        }, 2000);
    }    
});

let p3 = Promise.allSettled([prom1, prom2]);

p3.then((data) => {  
    console.log(data);
}).catch((err) => {
    console.log(err);
});

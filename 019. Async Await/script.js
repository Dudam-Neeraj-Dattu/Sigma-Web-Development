console.log("Hello, World!");

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

console.log("starting...")

console.log("getting data...")

console.log("almost got data...")

let data = getData();

data.then((v) => {
    console.log(data);
});

//the following code will run before the data is received because of the async nature of the code, to make it run only after getting resolved, the first method is write the code inside the then block or use async await

console.log("got data...")

console.log("processing data...")

console.log("data processed...")

console.log("Task 2...")
console.log("Task 3...")

//approach 1
/*
data.then((v) => {
    console.log(data);
    console.log("got data...")

    console.log("processing data...")

    console.log("data processed...")

    console.log("Task 2...")
    console.log("Task 3...")
});
 */

//approach 2 (using async await)
async function getData2 () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 3000);
    });
}

async function main() {
    console.log("starting...")

    console.log("getting data...")

    console.log("almost got data...")

    let data = await getData();

    console.log(data);

    console.log("got data...")

    console.log("processing data...")

    console.log("data processed...")

    console.log("Task 2...")
    console.log("Task 3...")

}

main();




async function getData () {
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await x.json();
    return data;
}

async function main() {
    console.log("starting...")

    console.log("getting data...")

    console.log("almost got data...")

    let data = await getData();

    console.log(data);

    console.log("got data...")
    
    console.log("Task 2...")


}

main();
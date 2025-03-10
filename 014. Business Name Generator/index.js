let adj = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let shop = {
    1 : "Engine",
    2 : "Food",
    3 : "Garments"
}

let word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

const a = Math.floor(Math.random() * 3) + 1;
const b = Math.floor(Math.random() * 3) + 1;
const c = Math.floor(Math.random() * 3) + 1;

console.log(`${adj[a]} ${shop[b]} ${word[c]}`);
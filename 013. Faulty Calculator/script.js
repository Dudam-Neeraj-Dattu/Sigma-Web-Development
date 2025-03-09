const rand = Math.random() < 0.1 ? true : false;
alert(rand);
const a = Number(prompt("Enter the first number > 0"));
const b = Number(prompt("Enter the second number > 0"));
const op = prompt("Enter the operation (+, -, *, /)");

if (!['+', '-', '*', '/'].includes(op)) {
    alert("Invalid operation, refresh the page and try again");
}

if (rand) {    
    if(op === '+') {
        alert(`Result: ${a - b}`);
    }
    else if(op === '-') {
        alert(`Result: ${a + b}`);
    }
    else if(op === '*') {
        alert(`Result: ${a / b}`);
    }
    else if(op === '/') {
        alert(`Result: ${a ** b}`);
    }
}
else {
    if(op === '+') {
        console.log(a + b);
        alert(`Result: ${a + b}`);
    }
    else if(op === '-') {
        alert(`Result: ${a - b}`);
    }
    else if(op === '*') {
        alert(`Result: ${a * b}`);
    }
    else if(op === '/') {
        alert(`Result: ${a / b}`);
    }
}
    
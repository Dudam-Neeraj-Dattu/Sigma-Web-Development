let boxes = document.getElementsByClassName('box')

console.log(boxes)

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

for (const key in boxes) {
    if (Object.prototype.hasOwnProperty.call(boxes, key)) {
        const element = boxes[key];
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
        
    }
}
console.log("console1");
console.log("console2");

setTimeout(() => {
    console.log("inside setTimeout");
}, 3000)

// this setTimeout will be executed after 3 seconds, but the other code below it will be executed. script doesn't wait for setTimeout to be executed.

// this is the asynchronous nature of javascript

console.log("The end");


const callback = (arg) => {  
    console.log(arg);
}


const loadScript = (src, callback) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = callback("Harry");
    document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
let a = 7

function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}

function fac(number){

    if (number === 1) return 1;
    return number * fac(number-1)
}

console.log(factorial(a))
console.log(facFor(a))
console.log(soma(3, 4))
/*
só podem serem usadas após a declaração da função

console.log(sub(4, 3))
console.log(mult(2, 5))
*/

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x = y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}
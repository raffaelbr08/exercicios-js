let num1 = 1
let num2 = 2

num1++ // forma pós-fixada, acrescenta 1 unidade à variável
console.log(num1)
--num1 // forma pré-fixada, subtrai 1 unidade da variável
console.log(num1)

++num1
console.log(num1)
num1--
console.log(num1)

console.log(++num1 === num2--) // true, por conta da prioridade.
console.log(num1 === num2)
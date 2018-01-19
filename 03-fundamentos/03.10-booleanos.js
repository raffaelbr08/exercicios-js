let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // Array
console.log(!!{}) // Objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('para finalizar...')
/*
 '||' significa 'ou', então basta que um valor seja verdadeiro.
*/
console.log(!!('' || null || 0 || ' '))

let name = ''
/*
 Se a variável não possuir valor atribuido, imprime 'Desconhecido'
 */
console.log(name || 'Desconhecido')
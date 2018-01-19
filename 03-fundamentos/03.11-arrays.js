/*
 * Arrays são dinâmicos, sem tamanho fixo, pode ser alterado se necessário
 * heterogêneo, pode ter diferentes tipos de dados
 * em JS arrays são 'objetos'
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // 'undefined, porque não foi previamente definido.

valores[10] = 10
console.log(valores) // [ 7.7, 8.9, 6.3, 9.2, <6 empty items>, 10 ]
console.log(valores.length) // tamanho do array

valores.push({id: 3}, false, null, 'teste') // adiciona itens ao final do array
console.log(valores)

console.log(valores.pop()) // remove o ultimo elemento do array
console.log(valores)

delete valores[0] // exclui o elemento especificado do array
console.log(valores)

console.log(typeof valores) // em JS um array é um objeto
let valor // não inicializada
console.log(valor) // undefined


valor = null // inicializada, mas não aponta nenhum endereço de memória
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)
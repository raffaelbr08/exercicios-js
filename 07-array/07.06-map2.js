const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

console.log(carrinho)
/*
 [ '{ "nome": "Borracha", "preco": 3.45 }',
   '{ "nome": "Caderno", "preco": 13.90 }',
   '{ "nome": "Kit de Lápis", "preco": 41.22 }',
   '{ "nome": "Caneta", "preco": 7.50 }' ]
*/

const obj = e => JSON.parse(e) // transforma strings em objeto
console.log(carrinho.map(obj))
/*
 [ { nome: 'Borracha', preco: 3.45 },
   { nome: 'Caderno', preco: 13.9 },
   { nome: 'Kit de Lápis', preco: 41.22 },
   { nome: 'Caneta', preco: 7.5 } ]
*/

const preco = e => e.preco // retorna apenas o preco
apenasPreco = carrinho.map(obj).map(preco)

console.log(apenasPreco) // [ 3.45, 13.9, 41.22, 7.5 ]
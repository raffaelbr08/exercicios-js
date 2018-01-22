/*
 JSON - JAVA SCRIPT OBJECT NOTATION
 Um objeto em JavaScript não é JSON
*/

const prod1 = {} // um par de chaves representa um objeto
prod1.nome = 'Celular Ultra Mega' // Um objeto é uma coleção de chave:valore
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaços.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.00,
}

console.log(prod2)

/*
Isto é um JSON
https://jsonlint.com/
*/
'{ "nome": "Camisa Polo", "preco": 70.90 }'
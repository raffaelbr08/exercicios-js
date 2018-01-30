// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {
//     nome: 'Ana'
// }
pessoa.nome = 'Ana'
console.log(pessoa)
Object.freeze(pessoa) // torna o objeto constante, não permite alterações
pessoa.nome = 'Alex'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
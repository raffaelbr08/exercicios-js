/*
 O operador ternário é composto por 3 partes:
 a primeira é uma expressão que retorna sempre verdadeiro ou falso
 a segunda é o que retorna se a expressão for verdadeira
 a terceira é o que retorna se a expressão for falsa
*/
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(6.9))
console.log(resultado(7.1))
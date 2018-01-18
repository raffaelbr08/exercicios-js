const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
/*
 Código na tabelas ASC https://unicode-table.com/pt/
*/
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('d')) // Retorna o índice do caracter

console.log(escola.substring(1)) // Imprime a partir do indice especificado até o final: od3r
/* 
 Imprime do indice 0 até o 3, sem incluir o 3
 ou:
 Me dê 3 caracteres a partir do indice 0

 Cod
*/
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!')) // Escola Cod3r!
console.log(escola.replace(3, 'e')) // Coder

console.log(escola.replace(/\d/, 'e')) // Uso de expressões regulares: Coder

console.log('Ana,Maria,Pedro'.split(',')) // Converte string em array
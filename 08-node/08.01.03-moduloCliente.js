const moduloA = require('./08.01.01-moduloA')
const moduloB = require('./08.01.02-moduloB')

console.log(moduloA.ola) // Fala Pessoal
console.log(moduloA.bemVindo) // Bem vindo ao node!
console.log(moduloA.ateLogo) // Até o próximo exemplo!
console.log(moduloA)
/*
  { ola: 'Fala Pessoal',
   bemVindo: 'Bem vindo ao node!',
   ateLogo: 'Até o próximo exemplo!'
  }
*/

console.log(moduloB.bomDia) // Bom dia
console.log(moduloB.boaNoite()) // Boa Noite
console.log(moduloB) // { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }
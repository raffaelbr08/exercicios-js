const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // Adiciona elemento ao final do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona ao inicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos do array
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)
// 

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Botas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2
console.log(algunsPilotos1)// [ 'Botas', 'Raikkonen', 'Verstappen' ]
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) // [ 'Alonso', 'Botas', 'Raikkonen' ]
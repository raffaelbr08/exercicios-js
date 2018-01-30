console.log(typeof Array, typeof new Array, typeof []) // function object object

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // mais utilizado para substituição
aprovados.push('Abia') // adiciona ao final do array
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10
/*
 [ 'Bia',
   'Carlos',
   'Ana',
   'Paulo',
   'Abia',
   <4 empty items>,
   'Rafael' ]
*/
console.log(aprovados)
console.log(aprovados[8] === undefined) // true

aprovados.sort() // organiza o array
console.log(aprovados)
delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // remove/adiciona elementos
console.log(aprovados)
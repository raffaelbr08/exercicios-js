const filhas = [
    'Valeskah',
    'Cibalena'
]

const filhos = [
    'Uoxinton',
    'Uesclei'
]

const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos) // [ 'Valeskah', 'Cibalena', 'Uoxinton', 'Uesclei' ] [ 'Valeskah', 'Cibalena' ] [ 'Uoxinton', 'Uesclei' ]

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]])) // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
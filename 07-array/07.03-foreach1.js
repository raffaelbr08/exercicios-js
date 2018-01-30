const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1) Agatha
// 2) Aldo
// 3) Daniel
// 4) Raquel
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// Agatha
// Aldo
// Daniel
// Raquel
aprovados.forEach(nome => console.log(nome))

// Agatha
// Aldo
// Daniel
// Raquel
const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

console.log(aprovados) // [ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
console.log(exibirAprovados) // [Function: exibirAprovados]
// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o segundo valor fica como 'undefined'
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // ignora os valores seguintes.
imprimirSoma()

// Função com retorno
function soma(a, b = 0) { // define um valor padrão quando este não é passado.
    return a + b
}
console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // NaN porque o primeiro valor não foi tratado.

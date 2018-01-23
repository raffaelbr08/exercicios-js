function soma() {
    let soma = 0
    /*
     'arguments' - Array interno
     Toda função tem este array disponível,
     quando nenhum parâmetro é passado, este array está vazio
     e vc tem a possibilidade de pegar todos os parâmetros passados
     a partir da chamada da função e fazer qualquer operação
    */
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

// console.log(soma())
// console.log(soma(1))
// console.log(soma(1.1, 2.2, 3.3))

// console.log(soma(1.1, 2.2, `Teste`))
console.log(soma(`a`, `b`, `c`))
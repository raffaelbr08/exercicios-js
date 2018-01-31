const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China' // filtra por país
const mulheres = f => f.genero === 'F' // filtra por gênero
const menorSalario = (func, funcAtual) => { // func = acumulador
    /*
      Se func.salario for menor que (<) funcAtual então
      retorne func caso contrário (?)
      : retorne funcAtual
    */
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})
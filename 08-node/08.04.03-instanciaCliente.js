const contadorA = require('./08.04.01-instanciaUnica')
const contadorB = require('./08.04.01-instanciaUnica')

const contadorC = require('./08.04.02-instanciaNova')()
const contadorD = require('./08.04.02-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // 3 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor) // 3 1
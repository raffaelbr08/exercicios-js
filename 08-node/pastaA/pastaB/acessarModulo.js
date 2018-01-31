const moduloA = require('../../08.01.01-moduloA')
console.log(moduloA.ola)

const moduloA2 = require('/Users/felix/Documents/exercicios-js/08-node/08.01.01-moduloA.js')
console.log(moduloA.ateLogo)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
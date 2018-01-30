// Funções não são exportadas de objetos para JSON
const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) // {"a":1,"b":2,"c":3}

// console.log(JSON.parse("{ a:1, b: 2, c: 3 }")) // erro
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) // erro
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // { a: 1, b: 'sting', c: true, d: {}, e: [] }

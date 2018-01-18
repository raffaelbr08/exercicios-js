console.log(7 / 0) // Resultado: 'Infinity'
console.log('10' / 2) // Resultado: 5
/*
 No exemplo acima, como a divisão não faz sentido em uma string
 o JS executa a divisão.
 No exemplo '3' + 2, como o simbilo de soma faz sentido em uma string
 o JS concatena.
 Enquanto que como '3' - 2 não faz sentido em uma string
 então o JS executa a subtração
*/
console.log('3' + 2)
console.log('3' - 2)
console.log('Show!' * 2) // Resultado: NaN - Not a Number
/*
  // 0.7999999999999999
  por conta da especificação de ponto flutuante do JS:
  https://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf
*/
console.log(0.1 + 0.7)
// console.log(10.toString())
console.log((10.345).toFixed(2)) // Resultado: 10.35

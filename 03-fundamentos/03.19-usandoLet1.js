var numero = 1
{
    let numero = 2 // visível apenas dentro do bloco.
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)
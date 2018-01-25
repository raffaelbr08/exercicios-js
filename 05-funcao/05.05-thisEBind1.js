const pessoa = {
    saudacao: `Bom dia!`,
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

/*
// conflitos entra paradigmas: funcional e Orientação a Objetos

const falar = pessoa.falar
falar()
*/

/*
 O método bind() cria uma nova função que, quando chamada, 
 tem seu parâmetro (ref mesmo objeto) this, podendo vincular
 ou iniciar com outros parâmetros definidos, dada sequência dos argumentos 
 que foram fornecidos quando a nova função é chamada.

 ref.: https://goo.gl/NEMntP
*/
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
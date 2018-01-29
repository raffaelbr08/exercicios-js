/*
  Função que retorna um objeto.
  Factory simples:
*/

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenomr: 'Silva'
    }
}

console.log(criarPessoa())
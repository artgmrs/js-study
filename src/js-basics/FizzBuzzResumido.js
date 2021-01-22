// FizzBuzzResumido
// Ao comparar tipos primitivos, deve-se usar aspas simples para declarar o tipo
// 'string' 'number' 'boolean'

const num = fizzBuzz('Arthur');
console.log(num);

function fizzBuzz(num) {
    if (typeof num != 'string')
        return 'Não é um número'
}
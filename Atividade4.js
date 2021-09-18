//QUESTÃO 01
var numero1 = new Number(7)
var numero2 = new Number(-55)
var numero3 = new Number(389)
var numero4 = new Number(1000)
var numero5 = new Number(3.1459)
var numero6 = new Number(-46.267)

console.log(numero1)
console.log(numero2)
console.log(numero3)
console.log(numero4)
console.log(numero5)
console.log(numero6)

let soma = numero1 + numero6
console.log(soma)

let multiplicacao = numero1 * numero3
console.log(multiplicacao)

let divisao = numero4 / numero5
console.log(divisao)


//QUESTÃO 02
var valor1 = new Number(10)
var valor2 = new Number(3)
var valor3 = new Number(9)
var valor4 = new Number(99.9)
var valor5 = new Number(721)

console.log(valor1)
console.log(valor2)
console.log(valor3)
console.log(valor4)
console.log(valor5)

let valorMenor = (valor1 < Number.MAX_VALUE) ? 'É MENOR' : 'É MAIOR'
console.log(valorMenor)

let valorigual = (valor2 == NaN) ? 'IGUAL' : 'NÃO IGUAL'
console.log(valorigual)

let valorQuinto = (valor5 <= valor3) ? 'MENOR OU IGUAL' : 'NÃO É MENOR OU IGUAL'
console.log(valorQuinto)
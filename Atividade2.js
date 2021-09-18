/*Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:

a.       Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.

b.       Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.

c.       Dado que x = “7” e y = 7, valide se os valores são iguais. */


//Questão A
let x = 4
let y = 5

let resultadoA = (x === y) ? 'true' : 'false'
console.log(resultadoA)


//Questão B
let xx = "6"
let yy = "6"

let resultadoB = (xx == yy && xx === yy) ? 'true' : 'false'
console.log(resultadoB)

//Questão C
let xxx = "7"
let yyy = 7

let resultadoC = (xxx == yyy) ? 'true' : 'false'
console.log(resultadoC)



/*2)      Declare uma variável chamada nome.

a)       Atribua a ela o valor “Fulano”.

b)      Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.

 */

var nome = "Fulano"
console.log("Boa noite, " +nome)



/*3)   Considere x = x + y, dado que x = 10 e y = 5.*/

var x3 = 10
var y3 = 5

//a) Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.
console.log( x3 += y3)
x3 = 10

//b) Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.
console.log( x3 *= 5)
x3 = 10

//c) Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida
console.log( x3 -= x3)
x3 = 10

//d) Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.
console.log( x3 /= 5)
x3 = 10

//e) Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.
console.log( x3 /= 2)
x3 = 10
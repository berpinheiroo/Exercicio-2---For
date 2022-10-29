/* Faça um algoritmo que
receberá 4 palavras diferentes de seu usuário e irá concatenar todas
elas. */

var palavra
var frase = " "

for (var contador = 0; contador < 4; contador++) {
    palavra = prompt("Digite uma palavra")
    frase = frase + " " + palavra
}

console.log(frase)

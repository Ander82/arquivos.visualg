/*Algoritmo "estrutura-para-faca"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Seção de Declarações das variáveis 
   numero, fatorial, contador : inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("digite o numero para calcular o fatorial: ")
leia (numero)
fatorial:= 1

para contador de 1 ate numero faca
     fatorial := fatorial * contador
     
fimpara
escreva("o fatorial de ", numero, " é: ", fatorial)

Fimalgoritmo */

function acaoBotao() {
    var numero, fatorial

    numero = prompt("digite um numero para calcular o fatorial:")
    fatorial = 1

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }



    document.getElementById("paragrafo").innerText = "o fatorial de" + numero + " eh: " + fatorial
}
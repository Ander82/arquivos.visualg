/*Algoritmo "estrutura-se-senao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Seção de Declarações das variáveis 
   valor1, valor2, resultado : real
   operacao : caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
//a propsta desse programa eh calcular 2 valores baseado na operacao de sua escolha")
escreva("digite um valor:")
leia (valor1)
escreva("digite uma das opcoes: + * / -")
leia (operacao)
escreva("digite um valor:")
leia (valor2)

se operacao = "+" entao
   resultado := valor1 + valor2
senao
   se operacao = "-" entao
      resultado := valor1 - valor2
senao
     se operacao = "*" entao
     resultado := valor1 * valor2
senao
     se operacao = "/" entao
        resultado := valor1 / valor2
        fimse
      fimse
     fimse
fimse
   escreva("resultado do calculo: ", resultado)
Fimalgoritmo */

function acaoBotao(){
    var valor1, valor2, resultado, operacao

valor1 = prompt("digite o primeiro valor:")
operacao = prompt("digite uma das operacoes +, -, *, /")
valor2 = prompt("digite o segundo valor")

if(operacao == "+") {
    resultado = parseInt(valor1)  + parseInt (valor2)
}else if(operacao == "-") {
    resultado = parseInt(valor1)  - parseInt (valor2)
}else if (operacao == "*") {
    resultado = parseInt(valor1)  * parseInt (valor2)
}else if (operacao == "/") {
    resultado = parseInt(valor1)  / parseInt (valor2)
}

document.getElementById("paragrafo").innerText = resultado
}


/*Algoritmo "concatenacao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Seção de Declarações das variáveis 
     nome : caractere
     numero : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval("digite o nome: ")
   leia (nome)
   escreval("Digite o numero:")
   leia (numero)
   
   escreval(nome," : ", numero)

Fimalgoritmo*/
var nome, numero
nome = prompt("digite o seu nome")
numero = prompt("digite seu numero")

document.getElementById("paragrafo").innerText = nome + " : " + numero
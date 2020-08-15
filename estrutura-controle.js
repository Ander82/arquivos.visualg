/*Algoritmo "estrutura de controle"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : variaveis exemplos
// Autor(a)    :anderson
// Data atual  : 11/08/2020
Var
// Seção de Declarações das variáveis 
nome: caractere
nota1, nota2, media: real



Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("digite o nome do aluno:")
    leia(nome)
    escreval("digite a primeira nota:")
    leia(nota1)
    escreval("digite a segunda nota:")
    leia(nota2)
    media := (nota1 + nota2)/2

    se media >= 5 entao
    escreval("aprovado!!!", nome, "!!!sua media foi:", media)
    senao
    escreval("reprovado!!!", nome)

    fimse

Fimalgoritmo*/

var nome, nota1,nota2
nome = prompt("digite o nome do aluno:")
nota1 = prompt("digite a primeira nota:")
nota2 = prompt("digite a segunda nota:")

media = (parseInt(nota1)+parseInt(nota2)) /2

if (media >= 50)
    alert("aprovado!!!" + nome)
else
    alert("reprovado!!!" + nome)
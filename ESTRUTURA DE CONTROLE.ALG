Algoritmo "estrutura de controle"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : variaveis exemplos
// Autor(a)    :anderson
// Data atual  : 11/08/2020
Var
// Se��o de Declara��es das vari�veis 
nome: caractere
nota1, nota2, media: real



Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    escreval("digite o nome do aluno:")
    leia(nome)
    escreval("digite a primeira nota:")
    leia(nota1)
    escreval("digite a segunda nota:")
    leia(nota2)
    media := (nota1 + nota2)/2

    se media >= 50 entao
    escreval("aprovado!!!", nome, "!!!sua media foi:", media)
    senao
    escreval("reprovado!!!", nome)

    fimse

Fimalgoritmo
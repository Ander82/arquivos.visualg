Algoritmo "tipos de operações logica"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Seção de Declarações das variáveis
nome: caractere
nota1, nota2, media: real
passou: logico



Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
    passou:=falso
    escreval("digite o nome do aluno:")
    leia(nome)
    escreval("digite a primeira nota:")
    leia(nota1)
    escreval("digite a segunda nota:")
    leia(nota2)
    media := (nota1 + nota2)/2

    se media >= 50 entao
    passou:=verdadeiro
    fimse
    se passou entao
    escreval("aprovado!!!", nome, "!!!sua media foi:", media)
    senao
    escreval("reprovado!!!", nome)

    fimse

Fimalgoritmo
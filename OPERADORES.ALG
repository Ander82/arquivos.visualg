Algoritmo "tipos de opera��es logica"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Se��o de Declara��es das vari�veis
nome: caractere
nota1, nota2, media: real
passou: logico



Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
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
Algoritmo "estrutura-se-senao"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Se��o de Declara��es das vari�veis 
   valor1, valor2, resultado : real
   operacao : caractere

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
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
Fimalgoritmo
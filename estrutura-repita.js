/*Algoritmo "estrutura-repita"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 13/08/2020
Var
// Seção de Declarações das variáveis 
     valor1, valor2: real
     sairLoop: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   repita
       escreva("digite o primeiro valor:")
           leia(valor1)
       escreva("digite o segundo valor:")
           leia(valor2)
       escreval("resultado: ", valor1 + valor2)
       escreval("deseja sair? s/n" )
       leia(sairLoop)
   ate sairLoop <> "n"

Fimalgoritmo */

function acaoBotao(){
    var sairLoop, valor1, valor2

    do{
        valor1 =prompt("digite o primeiro valor:")
        valor2 =prompt("digite o segundo valor:")
        document.getElementById("paragrafo").innerText = "resultado"+(parseInt(valor1) +parseInt( valor2))  
         sairLoop=prompt("deseja sair? s/n:") 
    }while(sairLoop == "n")
}
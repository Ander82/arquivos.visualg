/*Algoritmo "estrutura-enquanto "
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 12/08/2020
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("digite a quantidade de vezes que vai ser verificado a idade: ")
    leia (limite)
    contador := 0
    enquanto contador < limite faca
       escreva("digite o nome da pessoa: ")
       leia(nome)
       escreva("digite a idade do ", nome, ": ")
       leia(idade)
       se idade > 18 entao
          escreval(nome, " voce eh maior de idade!")
       senao
          escreval(nome, " voce eh menor de idade!")
    fimse
    contador := contador + 1
    fimenquanto
    fimalgoritmo
     */
    //deu erro em javascript
function acaoBotao() {
        var nome, idade, limite, contador
        limite = prompt("digite a quantidade de vezes que vai ser verificado a idade:")
        contador = 0   
        while(contador < limite){
            nome = prompt("digite o nome da pessoa: ")
            idade = prompt("digite a idade do " + nome)
            if ( idade > 18 ) 
               document.getElementById("paragrafo").innerText = nome + " voce eh maior de idade!"
            else
               document.getElementById("paragrafo").innerText = nome + " voce eh menor de idade!"           
        contador++
        }      
   
    }
    

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
    
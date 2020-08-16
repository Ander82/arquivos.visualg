

function acaoBotao(){
    var sairLoop, valor1, valor2

    do{
        valor1 =prompt("digite o primeiro valor:")
        valor2 =prompt("digite o segundo valor:")
        document.getElementById("paragrafo").innerText = "resultado"+(parseInt(valor1) +parseInt( valor2))  
         sairLoop=prompt("deseja sair? s/n:") 
    }while(sairLoop == "n")
}
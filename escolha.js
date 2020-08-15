function acaoBotao(){
    var valor1, valor2, resultado, operacao

valor1 = prompt("digite o primeiro valor:")
operacao = prompt("digite uma das operacoes +, -, *, /")
valor2 = prompt("digite o segundo valor")

switch(operacao) {
    case "+":
        resultado = parseInt(valor1)  + parseInt (valor2)
        break
    case  "-":
        resultado = parseInt(valor1)  - parseInt (valor2)
        break
    case "*":
        resultado = parseInt(valor1)  * parseInt (valor2)
        break
    case "/":
        resultado = parseInt(valor1)  / parseInt (valor2)
        break

}
document.getElementById("paragrafo").innerText = resultado
}
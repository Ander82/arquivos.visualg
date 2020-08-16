

function acaoBotao() {
    var numero, fatorial

    numero = prompt("digite um numero para calcular o fatorial:")
    fatorial = 1

    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }



    document.getElementById("paragrafo").innerText = "o fatorial de" + numero + " eh: " + fatorial
}
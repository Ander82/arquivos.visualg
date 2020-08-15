var nome, nota1, nota2, passou

passou = false

nome = prompt("digite o nome do aluno:")
nota1 = prompt("digite a primeira nota:")
nota2 = prompt("digite a segunda nota:")

media = (parseInt(nota1)+parseInt(nota2)) /2

if (media >= 50)
    passou = true

    if(passou && media >= 50) {
        alert("Aprovado!!!" + nome )
    }else
    alert("reprovado"+ nome)
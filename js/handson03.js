
/*Aqui eu criei uma função para somar */
function somar(){
    /*entrada*/
    /*Na entrada de dados converti para inteiro os valores que vem do html certo? */
    var num1 = parseInt(document.getElementById("num1").value)
   /*fiz a mesma coisa com o segundo número*/
    var num2 = parseInt(document.getElementById("num2").value)
    /*processamento*/
    /*agora vamos processar somando dos dois valores convertidos*/
    var soma = num1+num2

    /*saida*/
    /*por último vamos mostrar a soma vamos?*/
    alert(soma)

    /*vamos executar...selva...*/
}
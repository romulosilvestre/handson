
/*Tá vendo essa bolinha branca ai em cima-é pra salvar)*/
/*  */
/* Isso é um comentário javascript */
/* Estamos iniciando a função */
function exibirMensagem(){
     /* Vamos receber o valor para colocar na variável nome */
     var nome = document.getElementById("nome").value;
     /* Agora vou mostrar uma mensagem Hello World e o nome digitado */
     alert("Hello World"+nome);
     /* Veja que usamos no código acima o "+" */
     /* Além de somar ele também serve para juntar ou unir */
     /* Essa união chamamos de concatenação */
/*Mas podemos usar um mais moderno*/
/*Chamado interpolação*/
/*Nele você usa o $ e umas chaves , elegante né*/
     alert(` Hello World ${nome} `);
     /*há o uso do ; não é obrigatório*/
     /*Como dever ser...*/    
}
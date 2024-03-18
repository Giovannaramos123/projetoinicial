var botao = document.getElementById("botao")
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var compl = document.getElementById("compl");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");

function alertar(){
    alert("O botão foi clicado!!!");
    saida.innerText = "Nome: " + nome.value + "\n Email: " + email.value + "\n Telefone: " + telefone.value + "\n CEP: " + cep.value
    + "\n Logradouro: " + logradouro.value + "\n Número da casa: " + numero.value + "\n Complemento: " + compl.value + "\n Bairro: " + bairro.value
    + "\n Cidade: " + cidade.value + "\n Estado: " + estado.value;
}


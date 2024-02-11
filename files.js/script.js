let telefone = document.getElementById("telefone");
let nome = document.getElementById("name");
let email = document.getElementById("email").value;
let termos = document.getElementById("termos");
let senha = document.getElementById("senha")
let errorText = document.getElementById("errorText");
let errorEmail = document.getElementById("errorE");
let errorSenha =  document.getElementById("errorSenha");
let errorTelefone = document.getElementById("errorTelefone");
const validade = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function enviar() {
    if (!nome.value) { 
        errorText.style.color = "white";
        errorText.innerText = "Preencha o campo para avançar" ;
    }
    else {
        errorText.style.color = "lime"
        errorText.innerText = "Campo preenchido corretamente!";
    }

    if (!telefone.value) {
        errorTelefone.style.color = "white";
        errorTelefone.innerText = "Insira seu Telefone para avançar" ; 
    
    }
    else if (telefone.value.length < 11) {
        errorTelefone.style.color = "orange";
        errorTelefone.innerText = "Insira um telefone válido para avançar" ; 
    }
    else {
        errorTelefone.style.color = "lime";
        errorTelefone.innerText = "Campo preenchido corretamente!" ; 
    }

    if (!email) {
        errorE.style.color = "white";
        errorE.innerText = "Preencha com o email para avançar" ;
    
    }
    else if(!email.match(validade)) {
        errorE.style.color = "orange";
        errorE.innerText = "Insira um E-mail válido" ;
     }
    else {     
        errorE.style.color = "lime";
        errorE.innerText = "Campo preenchido corretamente!" ;
    }

    if (!senha.value) {
        errorSenha.style.color = "white";
        errorSenha.innerText = "Insira a sua nova senha para avançar" ;
    }
    else if (senha.value.length < 8) {
        errorSenha.style.color = "orange";
        errorSenha.innerText = "Insira no mínimo 8 caracteres" ;
    }
    else {
        errorSenha.style.color = "lime";
        errorSenha.innerText = "Campo Preenchido corretamente" ;
    }
}
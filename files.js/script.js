const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

let telefone = document.getElementById("telefone");
let nome = document.getElementById("name");
let termos = document.getElementById("termos");
let senha = document.getElementById("senha")
let errorText = document.getElementById("errorText");
let errorEmail = document.getElementById("errorE");
let errorSenha =  document.getElementById("errorSenha");
let errorTelefone = document.getElementById("errorTelefone");
const validade = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function enviar() {
    let botaoDisable = document.getElementById("button")
    let email = document.getElementById("email").value;
// validação do nome
    if (!nome.value) { 
        errorText.style.color = "red";
        errorText.innerText = "Preencha o campo para avançar" ;
        botaoDisable.disabled = true;
    }
    else {
        errorText.style.color = "lime"
        errorText.innerText = "Campo preenchido corretamente!";
        botaoDisable.disabled = false;
    }
// validação do telefone
    if (!telefone.value) {
        errorTelefone.style.color = "red";
        errorTelefone.innerText = "Insira seu Telefone para avançar" ; 
        botaoDisable.disabled = true;
    
    }
    else if (telefone.value.length < 11) {
        errorTelefone.style.color = "orange";
        errorTelefone.innerText = "Insira um telefone válido para avançar" ;
        botaoDisable.disabled = true;
    }
    else {
        errorTelefone.style.color = "lime";
        errorTelefone.innerText = "Campo preenchido corretamente!" ; 
        botaoDisable.disabled = false;
    }
// validação do e-mail
    if (!email) {
        errorE.style.color = "red";
        errorE.innerText = "Preencha com o email para avançar" ;
        botaoDisable.disabled = true;
    
    }
    else if(!email.match(validade)) {
        errorE.style.color = "orange";
        errorE.innerText = "Insira um E-mail válido" ;
        botaoDisable.disabled = true;
     }
    else {     
        errorE.style.color = "lime";
        errorE.innerText = "Campo preenchido corretamente!" ;
        botaoDisable.disabled = false;
    }
// validação da senha
    if (!senha.value) {
        errorSenha.style.color = "red";
        errorSenha.innerText = "Insira a sua nova senha para avançar" ;
        botaoDisable.disabled = true;
    }
    else if (senha.value.length < 8) {
        errorSenha.style.color = "orange";
        errorSenha.innerText = "Insira no mínimo 8 caracteres" ;
        botaoDisable.disabled = true;
    }
    else {
        errorSenha.style.color = "lime";
        errorSenha.innerText = "Campo Preenchido corretamente" ;
        botaoDisable.disabled = false;
    }
}
// resetar a página depois que concluir
let button = document.querySelector("button")
function cadastrar() {
    button.addEventListener("click", () => {
        window.location.reload();
    });
}
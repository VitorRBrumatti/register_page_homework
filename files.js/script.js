let telefone = document.getElementById("telefone");
let nome = document.getElementById("name");
let email = document.getElementById("email");
let termos = document.getElementById("checkbox");
let errorE = document.getElementById("textErrorE");

function enviar() {
    if (!email.value) {
        errorE.style.color = "orange";
        errorE.innerText = "Insira um email para avançar" ; 
        return
    }
    errorE.style.color = "lime"
    errorE.innerText = "Campo preenchido corretamente!";
}
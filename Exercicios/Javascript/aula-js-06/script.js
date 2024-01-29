// ---------- CAMPOS USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- CAMPOS EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// ---------- CAMPOS IDADE ---------- //
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

// ---------- CAMPOS SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

// ---------- CAMPOS CONFIRMA SENHA ---------- //
let confirmaSenhaInput = document.getElementById("confirma-senha");
let confirmaSenhaLabel = document.querySelector('label[for="confirma-senha"]');
let confirmaSenhaHelper = document.getElementById("confirma-senha-helper");

// Mostrar ou ocultar popup de campo obrigatório
handlePopUp(usernameInput, usernameLabel);
handlePopUp(emailInput, emailLabel);
handlePopUp(idadeInput, idadeLabel);
handlePopUp(senhaInput, senhaLabel);
handlePopUp(confirmaSenhaInput, confirmaSenhaLabel);

function handlePopUp(field, labelField) {
    field.addEventListener("focus", () => {
        labelField.classList.add("required-popup")
    })

    field.addEventListener("blur", () => {
        labelField.classList.remove("required-popup")
    })
}

//Função que administra as classes para campos validos ou não.
function handleValidates(field, fieldHelper, validate, message) {
    if (!validate) {
        field.classList.remove("correct");
        field.classList.add("error");
        fieldHelper.innerText = message
        fieldHelper.classList.add("visible")
    } else {
        field.classList.remove("error")
        field.classList.add("correct")
        fieldHelper.classList.remove("visible")
    }
}

// Validar valor do input

usernameInput.addEventListener("change", (e) => {
   let valor = e.target.value;
   let message = "Seu usuario precisa ter mais de 3 caracteres"
   let validate = valor.length < 3 ? false : true
   //COMO FUNCIONA O TERNÁRIO.  
   // let nomedavariavel = condição ? seElaforverdadeira : seelaforfalsa
    
  handleValidates(usernameInput, usernameHelper, validate, message)
})

// Validar valor do input

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    let validate = (valor.includes("@") && valor.includes(".com")) ? true : false;
    let message = "digite um email valido"

    handleValidates(emailInput, emailHelper, validate, message)
})

//Validar idade

idadeInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    let validate = valor >= 18 ? true : false;
    let message = "Você precisa ser maior de 18 anos";

    handleValidates(idadeInput, idadeHelper, validate, message)
})

//validar senha

confirmaSenhaInput.addEventListener("change", (e) => {
    let valor = e.target.value;
    let primeiraSenha = senhaInput.value
    let validate = valor === primeiraSenha ? true : false;
    let message = "sua senha precisa ser igual"

    handleValidates(confirmaSenhaInput, confirmaSenhaHelper, validate, message)
})

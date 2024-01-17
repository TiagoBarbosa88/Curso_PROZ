const elementoH2 = document.querySelector("h2")

elementoH2.style.color = 'red'
elementoH2.style.fontSize = '50px'

// Mudar o botão
const button = document.querySelector('button')

button.style.backgroundColor = 'Blue'
button.style.color = 'white'
button.style.borderRadius = '10px'


// Mudar input 1
// const inputUsuario = document.getElementById('login-usuario')
// inputUsuario.style.backgroundColor = "gray"
// inputUsuario.style.border = '2px black solid'
// inputUsuario.classList.add('error')

// inputUsuario.classList.add('correct')

// mudar o input
// const input = document.getElementById('login-senha')
// const senhaError = document.querySelectorAll('p')

// const text = document.querySelectorAll('p')
// text[1].classList.add('visible')


// input.style.border = '2px black solid'
// input.style.backgroundColor = 'gray'
// input.classList.add('error')

// let usuario = true
// let senha = true


// if ( usuario == true && senha == true){
//   inputUsuario.classList.add('correct')
//   input.classList.add('correct')
// } else if (usuario == false && senha == true){
//   inputUsuario.classList.add('error')
//   senhaError[0].classList.add('visible')
//   input.classList.add('correct')
// }


// cenário 1

// inputUsuario.classList.add('correct')
// input.classList.add('error')
// senhaError[1].classList.add('visible')

//cenário 2

// inputUsuario.classList.add('error')
// senhaError[0].classList.add('visible')
// input.classList.add('error')
// senhaError[1].classList.add('visible')

// cenário 3

// inputUsuario.classList.add('correct')
// input.classList.add('correct')


let usuario = true;
let senha = true;

const inputUsuario = document.getElementById('login-usuario');
const inputSenha = document.getElementById('login-senha');

const usuarioError = document.querySelector('#login-usuario + .error-text');
const senhaError = document.querySelector('#login-senha + .error-text');

// Lógica para usuário
if (!usuario) {
  inputUsuario.classList.add('error');
  usuarioError.classList.add('visible');
} else {
  inputUsuario.classList.add('correct');
}

// Lógica para senha
if (!senha) {
  inputSenha.classList.add('error');
  senhaError.classList.add('visible');
} else {
  inputSenha.classList.add('correct');
}


















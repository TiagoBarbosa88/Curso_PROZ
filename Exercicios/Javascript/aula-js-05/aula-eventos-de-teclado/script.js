const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");

linkPerfil.addEventListener("mouseover", () => {
  navPerfil.style.display = "block";
});

const linkPerfilDados = document.getElementById('link-perfil-dados');

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  console.log(e.code);

  if (navPerfil.style.display == 'block') {
    if (e.code == 'Digit1' || e.code == 'Numpad1') {
      console.log("Abre o menu");
      linkPerfilDados.click();
    } else if (e.code == 'Escape') {
      navPerfil.style.display = 'none';
    }
  } else if (e.code == 'Digit1') {
    console.log('Abrir menu');
    navPerfil.style.display = 'block';
  } else if (e.code == 'Backspace'){
    window.location.href = "./index.html";
    console.log('Voltar pra home')
  }
});
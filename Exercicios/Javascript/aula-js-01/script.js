// console.log("A conexão foi feita")

// // Capturar o elemento logo
// var logo = document.getElementById('logo')

// // Imprimir o atributo alt
// console.log('Alt do logo : ',logo.alt)


// //Capturar todos os elementos com a classe 'post-autores'
// const autores = document.getElementsByClassName('post-autor')

// console.log('Autores das postagenes :',
// autores.p)

// for ( let i = 0; i < autores.length; i++){
//   const autor = autores[i].textContent;
//   console.log('-', autor)
// }

//


// const primeiroLink = document.querySelector('#post01 .post-texto a');

// console.log('O link do primeiro post : ',primeiroLink.href)


// const palavraNegrito = document.querySelector('#post02 strong')

// console.log('A palavra em negrito :',palavraNegrito.textContent)


// 

let titulos = document.querySelectorAll('footer .lista_redes a')

function imprimirLista(lista){
  for (let i= 0; lista.length; i ++){
    console.log(titulos[i].innerText);   
   
  }
}

imprimirLista(titulos)

function indiceLista(lista){
  for(let i =0; i < titulos.length; i++){
    console.log('quantos itens: ', titulos[i].innerText );
  }
}

indiceLista(titulos)











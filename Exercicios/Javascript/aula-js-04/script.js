let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atualizarTotal() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
  valorSubtotal.innerText = subtotalInfo.valor.toFixed(2); 
}

atualizarTotal();

// Variáveis
let btnAdicionar = document.querySelector('#btn-adicionar-produto-01');
let btnSubtrair = document.querySelector('#btn-subtrair-produto-01');
let qtdProduto = document.querySelector('#quantidade-produto-01');

// Funções
function adicionar() {
  let valorAtual = Number(qtdProduto.value);

  if (valorAtual < 10) {
    qtdProduto.value = valorAtual + 1;
    subtotalInfo.quantidade = valorAtual + 1;
    subtotalInfo.valor = subtotalInfo.quantidade * 11.66;
    atualizarTotal();
  } else {
    alert('Limite máximo atingido (10 unidades).');
  }
}

function subtrair() {
  let valorAtual = Number(qtdProduto.value);

  if (valorAtual > 1) {
    qtdProduto.value = valorAtual - 1;
    subtotalInfo.quantidade = valorAtual - 1;
    subtotalInfo.valor = subtotalInfo.quantidade * 11.66;
    atualizarTotal();
  } else {
    alert('A quantidade não pode ser negativa.');
  }
}

// Eventos
btnAdicionar.addEventListener('click', adicionar);
btnSubtrair.addEventListener('click', subtrair);

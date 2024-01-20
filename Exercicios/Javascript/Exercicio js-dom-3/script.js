const body = document.body;

const produtoContainer = document.createElement('div');
produtoContainer.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Nome do Produto';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Descrição detalhada do produto.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'R$ 99,99';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);

body.appendChild(produtoContainer);
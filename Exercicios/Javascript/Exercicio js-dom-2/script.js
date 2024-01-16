const titulo = document.getElementById('titulo');
const link = document.getElementById('link');
const ul = document.querySelector('ul');
const lista = document.getElementById('lista-ordenada');

titulo.innerText = "Título da página";
link.innerText = 'Ir para o Proz Educação';
link.href = 'https://prozeducacao.com.br';

const links = [
  { texto: 'Google', url: 'https://www.google.com' },
  { texto: 'Aws', url: 'https://aws.amazon.com/' },
  { texto: 'GitHub', url: 'https://github.com' }
];

links.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.innerText = link.texto;
  a.href = link.url;
  li.appendChild(a);
  lista.appendChild(li);
})



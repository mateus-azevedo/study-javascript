// Funcao: Cria um novo paragrafo e o insere no fim do arquivo HTML

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Você clicou no botão!';
  document.body.appendChild(para);
}

/*
  1. Captura referencias de todos os botoes na pagina e armazena isso em um array.
  2. Vai ate todos os botoes e adiciona um event listener click a cada um deles.

  Quando cada botao e clicado, a funcao createParagraph() sera executada
*/

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
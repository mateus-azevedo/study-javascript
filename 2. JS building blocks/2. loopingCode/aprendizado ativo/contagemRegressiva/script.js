const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

do {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = 'Contagem regressiva ' + i;
  } else if (i === 0) {
    para.textContent = 'Lançar!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
} while (i >= 0);
  
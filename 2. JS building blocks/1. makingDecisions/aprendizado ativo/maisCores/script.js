const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  // html.style.backgroundColor = '#993399';
  html.style.color = textColor;
}

select.onchange = function() {
  let choice = select.value;

  switch(choice) {
    case 'white':
      update('white', 'black');
      break;
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('#993399', '#f5f5f5');
      break;
    case 'yellow':
      update('#ffd700', '#8b4513');
      break;
    case 'psychedelic':
      update('lime', 'purple');
      break;
  }
}
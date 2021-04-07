const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  let choice = select.value;
  let selectOption = select.innerText;
  let days;
  console.log(selectOption);
  if (choice === 'Aprendizados Ativo: um Calendário Simples') {
    days = 0;
  } else if (choice === 'Fevereiro') {
    days = 28;
  } else if (choice === 'Abril' || choice === 'Junho' || choice === 'Setembro' || choice === 'Novembro') {
    days = 30;
  } else {
    days = 31;
  }

  createCalendar(days, choice);
};

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = 'Mês de ' + choice;
  for (let i = 1; i <= days; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
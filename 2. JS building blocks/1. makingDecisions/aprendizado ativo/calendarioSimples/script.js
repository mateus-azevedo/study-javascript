const select = document.querySelector('select');
select.onchange = createCalendar;
// select.addEventListener('change', createCalendar);

function createCalendar() {
  let choice = select.value;
  let days;

  if (choice === 'none') {
    days = 0;
  } else if (choice === 'february') {
    days = 28;
  } else if (choice === 'april' || choice === 'june' || choice === 'september' || choice === 'november') {
    days = 30;
  } else {
    days = 31;
  }

  console.log(`${choice} ${days}`);
}
let admitted = document.querySelector('.admitted');
let refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let people = [
  'Chris',
  'Anne', 
  'Colin', 
  'Terri', 
  'Phil', 
  'Lola', 
  'Sam', 
  'Kay', 
  'Bruce'
];

let i = 0;

while (i < people.length) {
  if (people[i] === 'Phil' || people[i] === 'Lola') {
    refused.textContent += people[i] + ', ';
  } else {
    admitted.textContent += people[i] + ', ';
  }

  i++;
}

// console.log(refused.textContent.slice(0,refused.textContent.length-2));
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
let adicao = 6 + 8;
let subtracao = 20 - 15;
let multiplicacao = 3 * 7;
let divisao = 10 / 5;
let restante = 8 % 3;

console.log(`Adição -> 6 + 8 = ${adicao}`);
console.log(`Subtração -> 20 - 15 = ${subtracao}`);
console.log(`Multiplicação -> 3 * 7 = ${multiplicacao}`);
console.log(`Divisão -> 10 / 5 = ${divisao}`);
console.log(`Restante -> 8 % 3 = ${restante}`);

// PRECEDENCIA DE OPERADOR
let num1 = 10;
let num2 = 50;

console.log(`50 + 10 / 8 + 2 = ${num2 + num1 / 8 + 2}`);
console.log(`(50 + 10) / (8 + 2) = ${(num2 + num1) / (8 + 2)}`);

// OPERADORES DE COMPARACAO
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Iniciar máquina') {
    btn.textContent = 'Parar máquina';
    txt.textContent = 'A máquina iniciou!';
  } else {
    btn.textContent = 'Iniciar máquina';
    txt.textContent = 'A máquina está parada!';
  }
}
/* MODE DE UTILIZAR O IF*/
/* 1 MODO */
if (condicao) {
  // codigo para executar caso a condicao seja verdadeira
} else {
  // senao, executar este codigo
}


/* 2 MODO */
if (condicao) {
  // condigo para executar caso a condicao seja verdadeira
}
// codigo a ser executado


/* 3 MODO */
if (condicao) //executa aqui se for verdadeira
else //executa este outro codigo


/* EXEMPLO REAL */
if(comprasFeitas === true) {
  var granaFilhote = 10;
} else {
  var granaFilhote = 5;
}

///////////////////////////////////////////////////////

// Boolean - Qualquer valor que nao seja false, undefined, null, 0, NaN, ou
// uma string vazia ('') retorna true quando testado como uma instrucao condicional

var cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');    
} else {
  console.log('No cheese on toast for you today.');
}

var shoppingDone = false;

if (shoppingDone) { // nao precisa especificar o '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}

///////////////////////////////////////////////////////

// Aninhando if ... else
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
  } else if (temperature >= 86) {
    para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
  }
}

// Operadores logicos: AND, OR e NOT
// AND
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}

// OR
if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}

// NOT && OR
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}

// OR && AND
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}

// COMPARACAO "ERRADA"
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
// COMPARACAO CERTA
if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // run my code
}


// INSTRUCAO SWITCH
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
}
/*
                EXPLICACAO SWITCH CASE
1. A palavra-chave switch, seguido por um par de parênteses.

2. Uma expressão ou valor dentro dos parênteses.

3. A palavra-chave case, seguido por uma escolha que a expressão / valor poderia ser, seguido por 
   dois pontos.
   
4. Algum código para ser executado se a escolha corresponder à expressão.

5. Uma instrução break, seguido de um ponto e vírgula. Se a opção anterior corresponder à expressão / valor, 
   o navegador interromperá a execução do bloco de código aqui e passará para qualquer
   código que aparecer abaixo da instrução switch.
   
6. Como muitos outros casos (marcadores 3 a 5) que você quiser.

7. A palavra-chave default, seguido por exatamente o mesmo padrão de código de um dos casos 
   (marcadores 3 a 5), exceto que o default não tem escolha após ele, e você não precisa da 
   instrução break, pois não há nada para executar depois disso o bloco de qualquer maneira. Esta é 
   a opção padrão que é executada se nenhuma das opções corresponder.
*/

///////////////////////////////////////////////////////

// Operador Ternario
//( condicao ) ? run this code : run this code instead;

let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
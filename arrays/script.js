    /* ARRAY */

// Criando uma array
var shopping = ['bread', 'milk', 'cheese', 'humus', 'noodles'];
shopping; /* shopping vai retornar agora [ "bread", "milk", "cheese", "hummus", "noodles" ] */

var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];


// Acessando e modificando itens de uma array
shopping[0]; //return 'bread'

shopping[0] = 'tahini';
shopping /* shopping vai retornar agora [ "tahini", "milk", "cheese", "hummus", "noodles" ] */

random[2][2];


// Encontrando o comprimento de uma array
sequence.length; /* deve retornar 7 */


    /* ALGUNS METODOS UTEIS EM ARRAY */

// Convertendo entre strings e arrays
// 1. Crie uma string no seu console.
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
// 2. Agora vamos dividir isto em cada virgula
var myArray = myData.split(',');
myArray;
// 3. Finalmente, tentamos encontrar o comprimento da sua nova array, e recuperar alguns itens dela.
myArray.length;
myArray[0];
myArray[1];
myArray[myArray.length - 1];
// 4. Voce tambem pode ir no sentido oposto usando o metodo join(). Tente o seguinte.
var myNewString = myArray.join(',');
myNewString;
// 5. Outro jeito de converter uma array em uma string e usar o metodo toString(). toString() e 
// indiscutivelemente mais simples join() pois nao necessita um paramentro, mas mais limitada.
// Com join() voce pode especificar diferentes separadores(tente o passo 4 com um caracter 
// diferente da virgula).
var dogNames = ['Rocket', 'Flash', 'Bella', 'Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger


// Adicionando e removendo itens de arrays
// 1. Note que voce precisa para incluir um ou mais itens ao final da sua array. Tente isto:
myArray.push('Cardiff');
myArray;
myArray.push('Bradford', 'Brighton');
myArray;
// 2. O novo comprimento da array e retornado quando a chamada do metodo completa. Se voce quer
// armazenar o novo comprimento da array em uma variavel, voce poderia fazer algo como isto:
var newLength = myArray.push('Bristol');
myArray;
newLength;
// 3. Removendo o ultimo item da array e tao simples como um pop() nele. Tente isto:
myArray.pop();
// 4. O item que foi removido e retornado quando a chamada do metodo completa. Para salvar o item em
// uma nova variavel, vode poderia fazer isto: 
var removedItem = myArray.pop();
myArray;
removedItem;

// unshift() e shift() funciona exatamente do mesmo modo que push() e pop(), respectivamente,
// excete que eles funcionam no comeco do array, nao no final.
// 1. Primeiro unshift() — tente os seguintes comandos:
myArray.unshift('Edinburgh');
myArray;
// 2. Agora shift() Tente estes!
var removedItem = myArray.shift();
myArray;
removedItem;
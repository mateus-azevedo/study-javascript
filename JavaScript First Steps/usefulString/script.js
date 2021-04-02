// Descobrindo o comprimento de uma string
var browserType = 'mozilla';
console.log('tamanho palavra \'mozilla\': ' + browserType.length);

// Recuperando um caractere de string especifico
console.log(browserType[0]);
console.log(browserType[browserType.length - 1]);

// Encontrando uma substring dentro de uma string e extraindo-a
console.log(browserType.indexOf('zilla')); // retorna 2, porque a substring "zilla" se na posicao 2 
console.log(browserType.indexOf('vanilla')); // retorna -1, porque nao e encontrada na string principal
if(browserType.indexOf('mozilla') !== -1) {
  // faz coisas com a string
}
console.log(browserType.slice(0,3)); // extrai trecho demarcado do texto principal para uma substring
console.log(browserType.slice(2)); // extrai a partir da posicao do texto principal para uma substring

// Mudando entre maiusculas e minusculas
var radData = 'My NaMe Is MuD';
console.log(radData);
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

// Atualizando partes de uma string
console.log(browserType.replace('moz', 'van'));
console.log(browserType);
browserType = browserType.replace('moz', 'van')
console.log(browserType);
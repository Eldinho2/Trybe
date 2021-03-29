let numero = 5;

for (let index = 1; index <= numero; index += 1) {
let espaco = ' '.repeat(numero - index);
let asterisco = '*'.repeat(index);

console.log(espaco + asterisco);
}
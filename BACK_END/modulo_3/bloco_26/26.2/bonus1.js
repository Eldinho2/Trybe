//Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
//Pergunte à pessoa usuária qual arquivo ela deseja ler.
//Leia o arquivo indicado.
//Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
//Caso o arquivo exista, escreva seu conteúdo na tela.

const fs = require('fs').promises;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function readFile() {
  try {
    await rl.question('Digite o nome do arquivo que deseja ler: ', (file) => {
      fs.readFile(file, 'utf8').then((data) => {
        console.log(data);
      });
    });
  } catch (err) {
    console.log(err);
  }
}

readFile();

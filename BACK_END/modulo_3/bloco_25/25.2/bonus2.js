//Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
//Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
//Leia o arquivo.
//Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
//Caso o arquivo exista, solicite a palavra a ser substituída.
//Solicite a nova palavra, que substituirá a palavra anterior.
//Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
//Pergunte o nome do arquivo de destino.
//Salve o novo arquivo no caminho de destino.
//Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .

const fs = require('fs').promises;
const readline = require('readline-sync');

async function modifyFile() {
  try {
    const file = await readline.question('Qual arquivo você deseja modificar? ');
    const word = await readline.question('Qual palavra você deseja substituir? ');
    const newWord = await readline.question('Qual palavra você deseja substituir? ');

    const fileContent = await fs.readFile(file, 'utf8');
    const newFileContent = fileContent.replace(new RegExp(word, 'g'), newWord);

    const newFileName = await readline.question('Qual o nome do arquivo de destino? ');

    await fs.writeFile(newFileName, newFileContent);
  } catch (error) {
    console.log(error.message);
  }
}

modifyFile();

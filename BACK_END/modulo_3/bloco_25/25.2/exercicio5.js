//Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
//Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
//Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
//Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
//O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .

const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const file = array.map ( (_, index) => `file${index + 1}.txt` );
file.map( (file, index) => fs.writeFile(file, array[index]) );

Promise.all(array.map( (file) => fs.readFile(file) )).then( (data) => fs.writeFile('fileAll.txt', data.join('\n')) );

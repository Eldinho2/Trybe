//Reescreva o código do exercício anterior para que utilize async/await .
//Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

const exerciseOne = require('./exercicio1.js');

function generateRandomNumber() {
	return Math.floor(Math.random() * 100 + 1);
}

async function exercicio3() {
	try {
		const result = await exerciseOne(generateRandomNumber(), generateRandomNumber(), generateRandomNumber());
		console.log(result);
	} catch (error) {
		console.log(error.message);
	}
}

exercicio3();

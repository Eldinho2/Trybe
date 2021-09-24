const { questionInt, question } = require('readline-sync');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function promp() {
  const result = getRandomInt(0, 10);

  console.log('Jogo de adivinhação');

  const answer = questionInt('Tente adivinhar o numero de 0 a 10: \n');

  if (answer === result) {
      return console.log('Parabéns, você acertou!');
} else {
    return console.log(`Você errou, o numero correto é: ${result}\n`);
    }    
}

function whantsPlayAgain() {
  const answer = question('Deseja jogar novamente? (sim/nao)\n');

  if (answer === 'sim') {
    promp();
  } else {
    return console.log('Até a próxima!');
  }
}

function playLoop() {
    promp();
    if (whantsPlayAgain()) {
      playLoop();
    }
}

playLoop();

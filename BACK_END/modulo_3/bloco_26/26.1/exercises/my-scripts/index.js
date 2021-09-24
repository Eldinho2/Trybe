const { questionInt } = require('readline-sync');

function main() {
    const script = questionInt(`Digite um número:
    1- velocidade
    2- imc
    3- sorteio\n`);

    switch (script) {
        case 1:
            require('./velocidade');
         break;
        case 2:
            require('./imc');
         break;
        case 3:
            require('./sorteio');
         break;
}
}

function promp() {
    console.log('\nOlá!');
  
    main();
}
  
promp();

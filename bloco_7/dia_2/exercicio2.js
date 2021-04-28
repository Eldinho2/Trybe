const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercicio 1 = adiciona key and value num objeto.

function addTurn(object, key, value) {
    object[key] = value
    return object;
  }

console.log(addTurn(lesson2, 'turno', 'manhã'));

  // exercicio 2 = lista as chaves do objetos atraves do metodo "keys"

function listKeys(object) {
    let key = Object.keys(object);
    return key;
  }

console.log(`Chaves do objeto: ${listKeys(lesson3)}`);


// exercicio 3 = lista tamando de um objeto atraves do ".length"


function objectLength(object) {
  let length = Object.keys(object).length
  return length;
}

console.log(`O tamanho desse objeto é: ${objectLength(lesson3)}`)

// exercicio 4 = lista os valores do objeto atraves do metodo "values"

function listValues(object) {
  let value = Object.values(object);
  return value;
}

console.log(`Valores do objeto: ${listValues(lesson3)}`);

// exercicio 5 = criando um objeto vazio e atribuindo 3 objetos a ele

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3} );

console.log(allLessons)

// exercicio 6 = 

function getValueByNumber(object, indice) {
  let result = object[indice];
  return result;
}

console.log(getValueByNumber(lesson1, 0))
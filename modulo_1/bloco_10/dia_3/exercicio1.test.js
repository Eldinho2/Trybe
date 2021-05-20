const exercicio1 = require('./exercicio1');

describe('testes para funcao generateNumber', () => {
  it('testando funcao generateNumber', () => {
    exercicio1.generateNumber = jest.fn().mockReturnValue(10);
    
    expect(exercicio1.generateNumber()).toBe(10);
  });
})
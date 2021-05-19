const sum = require('./sum.js')

describe('testes sum', () => {
  it('testa se soma de 4 e 5 é igual a 9', () => {
		expect(sum(4, 5)).toBe(9)
	})
})

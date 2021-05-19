const sum = require('./sum.js')

describe('testes sum', () => {
  it('testa se soma de 4 e 5 é igual a 9', () => {
	  expect(sum(4, 5)).toBe(9)
	})

  it('teste se 0 + 0 é igial a 0', () => {
	  expect(sum(0, 0)).toBe(0)
  })
})

const uppercase = require('./uppercase');

describe('testa uppercase', () => {
  id('testa funcao uppercase', (done) => {
		uppercase('teste', (str) => {
			expect(str).toBe('TEST');
			done()
		})
	})
})
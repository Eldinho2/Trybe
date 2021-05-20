const uppercase = require('./uppercase');

describe('testa uppercase', () => {
  it('testa funcao uppercase', (done) => {
		uppercase('teste', (str) => {
			expect(str).toBe('TESTE');
			done()
		});
	});
});

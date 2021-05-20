const { getUserName } = require('./exercicio2');

describe('testes para funcao getUserName', () => {
	it('testa se a funcao retorna um id que existe', async () => {
		expect.assertions(1);
		return getUserName(4).then(user => expect(user).toEqual('Mark'));
	});
});

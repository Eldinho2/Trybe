const { getRepos } = require('./exercicio3');

describe('testes para funcao getRepos', () => {
  it('teste de verificacao de repositorios', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    
    return getRepos(url).then(results => {
      expect(results).toContain('sd-01-week4-5-project-todo-list');
      expect(results).toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
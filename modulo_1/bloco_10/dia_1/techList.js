function techList(list, name) {
  if (!list || !list.length) return 'Vazio!';
  
  return list.sort().map((tech) => ({tech, name}));
}

module.exports = techList;

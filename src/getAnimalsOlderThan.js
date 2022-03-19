const data = require('../data/zoo_data');

/* 
  getAnimalsOlderThan(animal, age)
  -cria a variável animals com o objeto de um 'animal'
  -retorna se todos os animais residentes são mais velhos que 'age'
*/
function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find(specie => specie.name === animal);
  return animals.residents.every(animal => animal.age >= age);
}

module.exports = getAnimalsOlderThan;

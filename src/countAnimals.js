const { species } = require('../data/zoo_data');

/*
  Possíveis entradas de countAnimals:
    ():
      {
        species.name: species.residents.length,
        ...
      }
    ({ animal.specie }):
      specie.residents.length
    ({ animal.specie, animal.sex }):
      specie.residents.reduce(sex)
*/

/*
  countAllSpecies cria um objeto cujas chaves são os nomes de todas as espécies e os valores são o total de residentes.

  referência utilizada:
  https://dev.to/_bigblind/quick-tip-transform-an-array-into-an-object-using-reduce-2gh6
*/

function countAllSpecies() {
  return species.reduce((acc, specie) => {
    const { name, residents } = specie;
    return { ...acc, [name]: residents.length };
  }, {});
}

/*
  countAnimals testa se houve alguma entrada e retorna o número total de residentes ou o número total de residentes de um determinado sexo, senão chama countAllSpecies.
*/

function countAnimals(animal) {
  if (animal === undefined) {
    return countAllSpecies();
  }
  const { specie, sex } = animal;
  const { residents } = species
    .find(({ name }) => name === specie);
  if (sex !== undefined) {
    return residents
      .reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  }
  return residents.length;
}

module.exports = countAnimals;

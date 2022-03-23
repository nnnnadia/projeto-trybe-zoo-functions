const { species } = require('../data/zoo_data');

function countAllSpecies() {
  return species.reduce((acc, specie) => {
    const { name, residents } = specie;
    return { ...acc, [name]: residents.length };
  }, {});
}

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

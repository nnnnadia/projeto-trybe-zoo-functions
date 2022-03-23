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
  if (animal.specie !== undefined) {
    const residents = species
      .find((specie) => specie.name === animal.specie).residents;
    if (animal.sex !== undefined) {
      return residents
        .reduce((acc, curr) => (curr.sex === animal.sex ? acc += 1 : acc), 0);
    }
    return residents.length;
  }
}

module.exports = countAnimals;

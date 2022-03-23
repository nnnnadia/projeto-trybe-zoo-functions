const { species } = require('../data/zoo_data');

function countAnimals(animal) {
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
 
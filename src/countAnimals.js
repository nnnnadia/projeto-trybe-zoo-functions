const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  return species
    .find((specie) => specie.name === animal.specie).residents.length;
}

module.exports = countAnimals;

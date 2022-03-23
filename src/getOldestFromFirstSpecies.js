const { species, employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

const findById = (where, id) => where.find((item) => item.id === id);

function getOldestFromFirstSpecies(id) {
  const firstSpeciesId = findById(employees, id).responsibleFor[0];
  const olderResidentObj = findById(species, firstSpeciesId).residents
    .reduce((older, resident) => (resident.age > older.age ? resident : older));
  const { name, sex, age } = olderResidentObj;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

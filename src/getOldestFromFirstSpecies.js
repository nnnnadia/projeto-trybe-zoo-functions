const { species, employees } = require('../data/zoo_data')

/*
  findById encontra um objeto com o id recebido. Nesse contexto where é species ou employees.
*/
const findById = (where, id) => where.find((item) => item.id === id);

/*
  getOldestFromFirstSpecies encontra a id da primeira espécie que o funcionário com a id recebida é responsável.
  Depois a lista de residentes desta espécie é selecionada e a partir dela é verificado qual deles é o mais velho. Com esta informação é retornado uma lista com nome, sexo e idade.
*/
function getOldestFromFirstSpecies(id) {
  const firstSpeciesId = findById(employees, id).responsibleFor[0];
  const olderResidentObj = findById(species, firstSpeciesId).residents
    .reduce((older, resident) => (resident.age > older.age ? resident : older));
  const { name, sex, age } = olderResidentObj;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

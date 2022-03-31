const { species } = require('../data/zoo_data');

let speciesLocations = {};
let namedSpeciesLocations = {};
const locationsList = ['NE', 'NW', 'SE', 'SW'];

/*
  sortNames acessa cada objeto em cada região e ordena alfabeticamente cada valor (lista de nomes) desses objetos.
*/
function sortNames() {
  locationsList.forEach((location) => {
    namedSpeciesLocations[location].forEach((obj) => {
      const animal = Object.keys(obj);
      obj[animal].sort();
    });
  });
}

/*
  getNamesList cria um objeto em que animal é a chave e o valor é a lista de nomes.
  A lista é gerada através da lista residents do zoo_data, ela pode ser filtrada por sexo e depois é modificada para conter apenas os nomes.
*/
function getNamesList(animal, sex) {
  const animalObj = {};
  animalObj[animal] = species
    .find((specie) => specie.name === animal).residents;
  if (sex !== undefined) {
    const filteredBySex = animalObj[animal]
      .filter((resident) => resident.sex === sex)
      .map((resident) => resident.name);
    animalObj[animal] = filteredBySex;
    return animalObj;
  }
  const namesList = animalObj[animal].map((resident) => resident.name);
  animalObj[animal] = namesList;
  return animalObj;
}

/*
  generateNamesMap para cada região ele cria uma lista com os animais nela, em um novo objeto ele busca os nomes dos residentes.
*/
function generateNamesMap(sex) {
  locationsList.forEach((location) => {
    const animalsList = speciesLocations[location];
    namedSpeciesLocations[location] = animalsList
      .map((animal) => getNamesList(animal, sex));
  });
  return namedSpeciesLocations;
}

/*
  filterSpecieByLocation filtra os animais de uma região e retorna apenas os nomes das espécies.
*/
const filterSpecieByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

/*
  generateDefaultMap cria o mapa com cada espécie de cada região.
*/
function generateDefaultMap() {
  speciesLocations = {
    NE: filterSpecieByLocation('NE'),
    NW: filterSpecieByLocation('NW'),
    SE: filterSpecieByLocation('SE'),
    SW: filterSpecieByLocation('SW'),
  };
}

/*
  getAnimalMap cria um mapa padrão e o devolve caso nenhuma opção é informada.
  Caso a opção sexo seja declarada um mapa com os nomes é gerado filtrados por sexo, senão é gerado sem o filtro.
  Caso sorted seja verdadeiro as listas de nomes é ordenada alfabeticamente.
*/
function getAnimalMap(options) {
  generateDefaultMap();
  if (!options || !options.includeNames) {
    return speciesLocations;
  }
  if (options.sex) {
    const { sex } = options;
    namedSpeciesLocations = generateNamesMap(sex);
  } else {
    namedSpeciesLocations = generateNamesMap();
  }
  if (options.sorted) {
    sortNames();
  }
  return namedSpeciesLocations;
}

module.exports = getAnimalMap;

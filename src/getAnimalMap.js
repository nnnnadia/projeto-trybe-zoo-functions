const { species } = require('../data/zoo_data');

let speciesLocations = {};
let namedSpeciesLocations = {};
const locationsList = ['NE', 'NW', 'SE', 'SW'];

function getResidentsList(animal, sex) {
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

function transformNamesObject(location, sex) {
  const animalsList = speciesLocations[location];
  namedSpeciesLocations[location] = animalsList
    .map((animal) => getResidentsList(animal, sex));
}

function generateNamesMap(sex) {
  locationsList.forEach((location) => transformNamesObject(location, sex));
  return namedSpeciesLocations;
}

const filterSpecieByLocation = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

function generateDefaultMap() {
  speciesLocations = {
    NE: filterSpecieByLocation('NE'),
    NW: filterSpecieByLocation('NW'),
    SE: filterSpecieByLocation('SE'),
    SW: filterSpecieByLocation('SW'),
  };
}

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
    
  }
  return namedSpeciesLocations;
}

module.exports = getAnimalMap;

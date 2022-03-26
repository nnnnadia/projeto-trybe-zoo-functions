const { species } = require('../data/zoo_data');

const filterSpecieByLocation = (location) => {
  return species
    .filter((specie) => specie.location === location)
    .map((specie) => specie.name);
}


function getAnimalMap(options) {
  return ({
    NE: filterSpecieByLocation('NE'),
    NW: filterSpecieByLocation('NW'),
    SE: filterSpecieByLocation('SE'),
    SW: filterSpecieByLocation('SW'),
  });
}

module.exports = getAnimalMap;

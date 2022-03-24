const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants
    .reduce((acc, { age }) => {
      if (age < 18) {
        acc.child += 1;
        return acc;
      }
      if (age < 50) {
        acc.adult += 1;
        return acc;
      }
      acc.senior += 1;
      return acc;
    }, {
      adult: 0,
      child: 0,
      senior: 0,
    });
}

function calculateEntry(entrants) {
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };

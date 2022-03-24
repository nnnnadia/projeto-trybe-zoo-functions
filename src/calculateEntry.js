const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants
    .reduce((acc, { age }) => {
      if (age < 18) {
        return { ...acc, child: acc.child + 1 };
      }
      if (age < 50) {
        return { ...acc, adult: acc.adult + 1 };
      }
      return { ...acc, senior: acc.senior + 1 };
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

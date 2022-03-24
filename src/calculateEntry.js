const { prices } = require('../data/zoo_data');

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
  if (entrants === undefined || entrants.length === undefined) return 0;
  const party = Object.entries(countEntrants(entrants));
  return party.reduce((acc, curr) => acc + (curr[1] * prices[curr[0]]), 0);
}

module.exports = { calculateEntry, countEntrants };

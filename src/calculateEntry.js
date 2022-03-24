const { prices } = require('../data/zoo_data');

/*
  countEntrants recebe uma lista de objetos com a idade dos visitantes e retorna um objeto com a quantidade de pessoas em cada faixa etária.
*/

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

/*
  calculateEntry confere se os valores entrados são válidos, senão 0 é retornado.
  É acumulado a multiplicação da quantidade de pessoas em uma faixa etária pelo valor que a faixa etária paga.
  Como a saída de countEntrants devolve a mesma estrutura em que os dados dos preços estão, o acesso ocorre da seguinte forma:

  countEntrants(a):  prices(b):         para cada elemento será feito:
  [                  {                  a[1] * b[a[0]] + acc
    ['adult', 1],      adult: 49.99,    1 * b['adult'] + 0
    ['child', 2],      senior: 24.99,   1 * 49.99 + 0
    ['senior', 0],     child: 20.99,    49.99
  ]                  }
*/

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) return 0;
  const party = Object.entries(countEntrants(entrants));
  return party.reduce((acc, curr) => acc + (curr[1] * prices[curr[0]]), 0);
}

module.exports = { calculateEntry, countEntrants };

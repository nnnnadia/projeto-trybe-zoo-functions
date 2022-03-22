const data = require('../data/zoo_data');

// Input: String (recebido(s) como parâmetro(s))
// - '0938aa23-f153-4937-9f88-4858b24d6bce'
// - '0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'

// Output: Array de Objetos
// [
//   {
//     id: input,
//     ...
//   },
//   {
//     id: input,
//     ...
//   },
// ]

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((animalObj) => animalObj.id === id));
}

module.exports = getSpeciesByIds;

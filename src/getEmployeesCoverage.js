const { employees, species } = require('../data/zoo_data');

/*
  getAnimalsLocations recebe uma lista de nomes de espécie e filtra de species a localização das espécies contidas na lista.
*/
function getAnimalsLocations(responsibleSpecies) {
  return species
    .filter((specie) => responsibleSpecies.includes(specie.name))
    .map((specie) => specie.location);
}

/*
  getAnimalsNames retorna uma lista dos nomes dos animais que o funcionário é responsável filtrando as espécies com id na lista responsibleFor.
*/
function getAnimalsNames(employee) {
  return species
    .filter((specie) => employee[0].responsibleFor.includes(specie.id))
    .map((specie) => specie.name);
}

/*
  getEmployeeFullname retorna o nome completo do funcionário recebido.
*/
function getEmployeeFullname(employee) {
  return `${employee[0].firstName} ${employee[0].lastName}`;
}

/*
  getEmployeeRecord encontra o funcionário com determinado id e a lista de espécies que ele é responsável, a partir desses dados retorna uma ficha.
*/
function getEmployeeRecord(token) {
  const currEmployee = employees.filter(({ id }) => id === token);
  const responsibleSpecs = [...getAnimalsNames(currEmployee)];
  return ({
    id: token,
    fullName: getEmployeeFullname(currEmployee),
    species: responsibleSpecs,
    locations: getAnimalsLocations(responsibleSpecs),
  });
}

/*
  getEmployeesCoverage verifica se o token *não* foi passado, neste caso ele retorna a ficha de cada funcionário.
  Caso contrário ele verifica se existe um funcionário cujo nome, sobrenome ou id seja igual a token e retorna a ficha dele. Se não houver um funcionário correspondente joga um erro.
*/
function getEmployeesCoverage(token) {
  if (!token) {
    return employees
      .map((employee) => employee.id)
      .map((employee) => getEmployeeRecord(employee));
  }
  const currentEmployee = employees
    .find((employee) => employee.firstName === token.name
      || employee.lastName === token.name
      || employee.id === token.id);
  if (currentEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  return getEmployeeRecord(currentEmployee.id);
}

module.exports = getEmployeesCoverage;

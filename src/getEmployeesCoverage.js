const { employees, species } = require('../data/zoo_data');

function getAnimalsLocations(responsibleSpecies) {
  return species
    .filter((specie) => responsibleSpecies.includes(specie.name))
    .map((specie) => specie.location);
}

function getAnimalsNames(employee) {
  return species
    .filter((specie) => employee[0].responsibleFor.includes(specie.id))
    .map((specie) => specie.name);
}

function getEmployeeFullname(employee) {
  return `${employee[0].firstName} ${employee[0].lastName}`;
}

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

function getEmployeesCoverage(token) {
  if (token === undefined) {
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

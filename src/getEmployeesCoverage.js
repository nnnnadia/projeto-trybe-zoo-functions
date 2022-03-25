const { employees, species } = require('../data/zoo_data');

function getAnimalsLocations(specs) {
  return species
    .filter((spec) => specs.includes(spec.name))
    .map((spec) => spec.location);
}

function getAnimalsNames(emp) {
  return species
    .filter((spec) => emp[0].responsibleFor.includes(spec.id))
    .map((spec) => spec.name);
}

function getEmployeeFullname(emp) {
  return `${emp[0].firstName} ${emp[0].lastName}`;
}

function getEmployeeRecord(emp) {
  const curEmp = employees.filter(({ id }) => id === emp);
  const responsibleSpecs = [...getAnimalsNames(curEmp)];
  return ({
    id: emp,
    fullName: getEmployeeFullname(curEmp),
    species: responsibleSpecs,
    locations: getAnimalsLocations(responsibleSpecs),
  });
}

function getEmployeesCoverage(token) {
  if (token === undefined) {
    return employees
      .map((emp) => emp.id)
      .map((emp) => getEmployeeRecord(emp));
  }
}

module.exports = getEmployeesCoverage;

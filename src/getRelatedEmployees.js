const data = require('../data/zoo_data');

function isManager(id) {
  const currEmp = data.employees.find((emp) => emp.id === id);
  if (currEmp.managers.length > 1) {
    return false;
  }
  return true;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };

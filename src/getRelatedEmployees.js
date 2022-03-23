const { employees } = require('../data/zoo_data');

function isManager(id) {
  const currEmp = employees.find((emp) => emp.id === id);
  if (currEmp.managers.length > 1) {
    return false;
  }
  return true;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees
      .filter((employee) => employee.managers
        .some((manager) => manager === managerId))
      .map((related) => `${related.firstName} ${related.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

const data = require('../data/zoo_data');

function isManager(id) {
  const currEmp = data.employees.find((emp) => emp.id === id);
  if (currEmp.managers.length > 1) {
    return false;
  }
  return true;
}

function getRelatedEmployees(managerId) {
  if(isManager(managerId)) {
    
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };

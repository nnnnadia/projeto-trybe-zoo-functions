const { employees } = require('../data/zoo_data');

function getEmployeeByName(empName) {
  if (empName !== undefined) {
    return employees.find((emp) => emp.firstName === empName || emp.lastName === empName);
  }
  return {};
}

module.exports = getEmployeeByName;

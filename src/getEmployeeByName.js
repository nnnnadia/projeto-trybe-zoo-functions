const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(empName) {
  return employees.find((emp) => emp.firstName === empName || emp.lastName === empName);
}

module.exports = getEmployeeByName;

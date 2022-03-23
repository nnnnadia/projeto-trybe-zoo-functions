const { employees } = require('../data/zoo_data');

/*
  getEmployeeByName retorna o objeto do empregado quando o valor recebido é o seu primeiro ou último nome e retorna um objeto vazio quando não recebe nada.
*/

function getEmployeeByName(empName) {
  if (empName !== undefined) {
    return employees.find((emp) => emp.firstName === empName || emp.lastName === empName);
  }
  return {};
}

module.exports = getEmployeeByName;

const { employees } = require('../data/zoo_data');

/*
  Estrutura Organizacional
  -Stephanie
    -Burl
    -Ola
      -outros empregados
*/

/*
  isManager encontra o empregado com o id e retorna true (é manager) se ele não tiver superiores ou apenas um.
*/

function isManager(id) {
  const currEmp = employees
    .find((emp) => emp.id === id);
  if (currEmp.managers.length > 1) {
    return false;
  }
  return true;
}

/*
  getRelatedEmployees filtra os empregados que estão sob gerência do managerId e retorna esta lista formatada em nomes completos.
  Seu fluxo de exceção dispara um erro.
*/

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

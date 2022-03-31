const { hours, species } = require('../data/zoo_data');

/*
  createDayObj obtem os horários de abertura e fechamento do dia recebido. Caso não abra retorna um objeto com esta informação.
  Caso contrário filtra os animais disponíveis no dia criando uma lista com seus nomes e retorna um objeto com informações sobre o horário de funcionamento e a lista de animais disponíveis.
*/
function createDayObj(day) {
  const { open, close } = hours[day];
  if (open === 0 && close === 0) {
    return ({
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    });
  }
  const avAnimals = species
    .filter(({ availability }) => availability.includes(day))
    .map((spec) => spec.name);
  return ({
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: avAnimals,
    },
  });
}

/*
  Caso for recebido um dia da semana getSchedule retorna a progração deste dia.
  Caso for recebido o nome de uma espécie retorna a chave availability dela.
  Com outras entradas é criado e retornado um objeto com a programação da semana toda.
*/
function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  if (weekDays.some((day) => day === scheduleTarget)) {
    return createDayObj(scheduleTarget);
  }
  if (species.some((spec) => spec.name === scheduleTarget)) {
    return species.find((spec) => spec.name === scheduleTarget).availability;
  }
  const weekSchedule = {};
  weekDays.forEach((day) => {
    weekSchedule[day] = createDayObj(day)[day];
  });
  return weekSchedule;
}

module.exports = getSchedule;

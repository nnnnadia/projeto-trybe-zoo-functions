const { hours, species } = require('../data/zoo_data');

const weekDays = Object.keys(hours);

function createDayObj(day) {
  const { open, close } = hours[day];
  if (open === 0 && close === 0) {
    return ({
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      }
    });
  }
  const avAnimals = species
    .filter(({ availability }) => availability.includes(day))
    .map((spec) => spec.name);
  return ({
    [day]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: avAnimals,
    }
  });
}

function getSchedule(scheduleTarget) {
  if (Object.keys(hours).some((day) => day === scheduleTarget)) {
    return createDayObj(scheduleTarget);
  }
  return hours[scheduleTarget];
  // return createDayObj(scheduleTarget);
}

module.exports = getSchedule;

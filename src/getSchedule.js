const { hours, species } = require('../data/zoo_data');

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

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  if (weekDays.some((day) => day === scheduleTarget)) {
    return createDayObj(scheduleTarget);
  }
  if (species.some((spec) => spec.name === scheduleTarget)) {
    return species.find((spec) => spec.name === scheduleTarget).availability;
  }
}

module.exports = getSchedule;

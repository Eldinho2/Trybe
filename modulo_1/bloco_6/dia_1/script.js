const states = document.getElementById('estado');

function createStateOptions() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
createStateOptions();

function isValidDate(date) {
  let [day, month, year] = date.split('/');

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  return day > 0 && day <=31 && month > 0 && month <= 12 && year > 0;
}

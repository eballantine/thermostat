document.addEventListener("DOMContentLoaded", () => {
  const thermo = new Thermo();
  const updateTemperature = () => {
    document.querySelector('#temp').innerText = thermo.temp;
  }
  
  updateTemperature();

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermo.up();
    updateTemperature()
  })

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermo.down();
    updateTemperature()
  })

  document.querySelector('#eco-on').addEventListener('click', () => {
    thermo.switchOnEcoMode();
    updateTemperature()
  })

  document.querySelector('#eco-off').addEventListener('click', () => {
    thermo.switchOffEcoMode();
    updateTemperature()
  })
})

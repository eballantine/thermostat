document.addEventListener("DOMContentLoaded", () => {
  const thermo = new Thermo();
  const updateTemp = () => {
    document.querySelector('#temp').innerText = thermo.temp;
    document.querySelector('#thermo').className = thermo.energyProfile;
  }

  const updateEcoStatus = () => {
    let status = thermo.isEcoMode ? 'On' : 'Off'
    document.querySelector('#eco-status').innerText = status;
  }

  const updateLocation = data => {
    document.querySelector('#current-temp').innerText = data.main.temp;
    document.querySelector('#location').innerText = data.name;
    document.querySelector('#select-city-error').innerText = "";
  }
  
  const fetchLocationData = city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        updateLocation(data);
      })
      .catch(() => {
        document.querySelector('#select-city-error').innerText = "City not recognised. Try again."
      })
  }

  updateTemp();
  updateEcoStatus();
  fetchLocationData('London');

  document.querySelector('#temp-up').addEventListener('click', () => {
    thermo.up();
    updateTemp();
  })

  document.querySelector('#temp-down').addEventListener('click', () => {
    thermo.down();
    updateTemp();
  })

  document.querySelector('#temp-reset').addEventListener('click', () => {
    thermo.reset();
    updateTemp()
  })

  document.querySelector('#eco-on').addEventListener('click', () => {
    thermo.switchOnEcoMode();
    updateTemp();
    updateTemp();
  })

  document.querySelector('#eco-off').addEventListener('click', () => {
    thermo.switchOffEcoMode();
    updateTemp()
    updateEcoStatus()
  })

  document.querySelector('#select-city').addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.querySelector('#current-city').value;
    fetchLocationData(city);
  })
})

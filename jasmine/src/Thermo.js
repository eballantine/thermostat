const START_TEMP = 20;
const MIN_TEMP = 10;
const MAX_ECO = 25;
const MAX_NOT_ECO = 32;

class Thermo {
  constructor() {
    this.temp = START_TEMP;
    this.isEcoMode = true;
    this.energyProfile = this._checkEnergyProfile();
  }

  up() {
    let maxTemp = this._setMaxTemp();
    if(this.temp < maxTemp) this.temp++;
  }

  down() {
    if(this.temp > MIN_TEMP) this.temp--;
  }

  switchOffEcoMode() {
    this.isEcoMode = false;
  }

  reset() {
    this.temp = START_TEMP;
  }

  _setMaxTemp() {
    if(this.isEcoMode === true) {
      return MAX_ECO;
    } else {
      return MAX_NOT_ECO;
    }
  }

  _checkEnergyProfile() {
    if(this.temp < 18) {
      return 'low-usage';
    } else if(this.temp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

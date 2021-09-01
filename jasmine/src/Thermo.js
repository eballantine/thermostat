const START_TEMP = 20;
const MIN_TEMP = 10;
const LOW_USAGE_LIMIT = 18;
const MAX_ECO = 25;
const MAX_NOT_ECO = 32;

class Thermo {
  constructor() {
    this.temp = START_TEMP;
    this.isEcoMode = true;
    this.energyProfile = 'medium-usage';
  }

  up() {
    let maxTemp = this._setMaxTemp();
    if(this.temp < maxTemp) this.temp++;
    this._checkEnergyProfile();
  }

  down() {
    if(this.temp > MIN_TEMP) this.temp--;
    this._checkEnergyProfile();
  }

  switchOffEcoMode() {
    this.isEcoMode = false;
  }

  reset() {
    this.temp = START_TEMP;
    this._checkEnergyProfile();
  }

  _setMaxTemp() {
    if(this.isEcoMode === true) {
      return MAX_ECO;
    } else {
      return MAX_NOT_ECO;
    }
  }

  _checkEnergyProfile() {
    if(this.temp < LOW_USAGE_LIMIT) {
      this.energyProfile = 'low-usage';
    } else if(this.temp <= MAX_ECO) {
      this.energyProfile = 'medium-usage';
    } else {
      this.energyProfile = 'high-usage';
    }
  }
}

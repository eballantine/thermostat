const START_TEMP = 20;
const MIN_TEMP = 10;
let maxTemp;

class Thermo {
  constructor() {
    this.temp = START_TEMP;
    this.isEcoMode = true;
  }

  up() {
    this._setMaxTemp();
    if(this.temp < maxTemp) this.temp++;
  }

  down() {
    if(this.temp > MIN_TEMP) this.temp--;
  }

  _setMaxTemp() {
    if(this.isEcoMode === true) {
      maxTemp = 25;
    } else {
      maxTemp = 32;
    }
  }
}

const START_TEMP = 20;
const MIN_TEMP = 10;

class Thermo {
  constructor() {
    this.temp = START_TEMP;
    this.isEcoMode = true;
  }

  up() {
    this.temp++
  }

  down() {
    if(this.temp > MIN_TEMP) this.temp--;
  }
}

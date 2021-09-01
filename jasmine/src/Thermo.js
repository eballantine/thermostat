const START_TEMP = 20;

class Thermo {
  constructor() {
    this.temp = START_TEMP;
  }

  up() {
    this.temp++
  }
}

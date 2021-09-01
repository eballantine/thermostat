describe('Thermo', () => {
  let thermo;

  beforeEach(() => {
    thermo = new Thermo();
  });

  it('starts at 20˚C', () => {
    expect(thermo.temp).toEqual(20);
  });

  it('can increase the temperature with up function', () => {
    thermo.up();
    expect(thermo.temp).toEqual(21);
  });

  it('can decrease the temperature with down function', () => {
    thermo.down();
    expect(thermo.temp).toEqual(19);
  });

  it('has a minimum temperature of 10˚C', () => {
    for (let i = 0; i < 11; i++) {
      thermo.down();
    }
    expect(thermo.temp).toEqual(10);
  });

  it('has powersaving mode on by default', () => {
    expect(thermo.isEcoMode).toEqual(true);
  });

  it('power saving mode can be turned off', () => {
    thermo.switchOffEcoMode();
    expect(thermo.isEcoMode).toEqual(false);
  });

  it('can be reset to 20˚C', () => {
    thermo.up();
    thermo.up();
    thermo.reset();
    expect(thermo.temp).toEqual(20);
  });

  describe('powersaving mode is on', () => {
    it('has a maximim temperature of 25˚C', () => {
      for (let i = 0; i < 6; i++) {
        thermo.up();
      }
      expect(thermo.temp).toEqual(25);
    });
  });

  describe('powersaving mode is off', () => {
    it('has a maximim temperature of 32˚C', () => {
      thermo.switchOffEcoMode();
      for (let i = 0; i < 13; i++) {
        thermo.up();
      }
      expect(thermo.temp).toEqual(32);
    });
  });
});

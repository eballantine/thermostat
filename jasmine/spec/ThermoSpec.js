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
    beforeEach(() => {
      thermo.switchOffEcoMode();
      for (let i = 0; i < 12; i++) {
        thermo.up();
      }
    });
    
    it('has a maximim temperature of 32˚C', () => { 
      thermo.up();
      expect(thermo.temp).toEqual(32);
    });

    it('has high energy usage', () => {
      expect(thermo.energyProfile).toEqual('high-usage')
    });

    it('has low energy usage', () => {
      thermo.reset()
      for (let i = 0; i < 16; i++) {
        thermo.down();
      }
      expect(thermo.energyProfile).toEqual('low-usage')
    });

    it('has medium energy usage', () => {
      thermo.reset()
      expect(thermo.energyProfile).toEqual('medium-usage')
    });
  });
});

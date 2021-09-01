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
  
});

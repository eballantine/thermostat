describe('Thermo', () => {
  let thermo;

  beforeEach(() => {
    thermo = new Thermo();
  });

  it('starts at 20 degrees', () => {
    expect(thermo.temp).toEqual(20);
  });

  it('can increase the temperature with up function', () => {
    thermo.up(1);
    expect(thermo.temp).toEqual(21);
  });
});

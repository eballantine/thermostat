describe('Thermo', () => {
  let thermo;

  beforeEach(() => {
    thermo = new Thermo();
  });

  it('starts at 20 degrees', () => {
    expect(thermo.temp).toEqual(20);
  });
});

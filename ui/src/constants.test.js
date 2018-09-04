import * as constants from './constants.js';

describe('constants', () => {
  it('Contains the expected values', () => {
    expect(constants.BASENAME).toBe('/football-game');
    expect(constants.PORT).toBe(3030);
  });
});

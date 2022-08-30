import { stateControl, storeState, photosynthesis, feedWater, giveF } from '../src/js/powerplant.js';

describe('PowerPlant', () => {
  beforeEach(() => {
    const stateControl = storeState();
  });

  test('Increase light by 5', () => {
    const newState = stateControl(photosynthesis(5));
    expect(stateControl()).toEqual({light: 5});
  });
  
  test('Increase water by 3', () => {
    const newState = stateControl(feedWater(3));
    expect(stateControl()).toEqual({light: 5, water: 3});
  });

  test('Increase soil by 4', () => {
    const newState = stateControl(giveF(4));
    expect(stateControl()).toEqual({light: 5, soil: 4, water: 3});
  });
});
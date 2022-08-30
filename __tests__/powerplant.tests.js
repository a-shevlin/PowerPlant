import { storeState, photosynthesis, feedWater, giveF } from '../src/js/powerplant.js';

describe('powerplant', () => {
  const plant = { soil: 0, light: 0, water: 0, attack: 0, health: 0 };
  
  test('Increase light by 5', () => {
    const plant1 = storeState(plant);
    plant1(photosynthesis(5));
    expect(plant1().light).toEqual(5);
  });
  
  test('Increase water by 3', () => {
    const plant1 = storeState(plant);
    plant1(feedWater(3));
    expect(plant1().water).toEqual(3);
  });

  test('Increase soil by 4', () => {
    const plant1 = storeState(plant);
    plant1(giveF(5));
    expect(plant1().soil).toEqual(5);
});

  // test('has light:0 and soil: 0', () => {
  //   let x = {light: 0, soil: 0};
  //   stateControl4(photosynthesis(0));
  //   stateControl4(giveF(0));
  //   expect(stateControl4()).toEqual(x);
  // });
});
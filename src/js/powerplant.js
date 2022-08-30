//business logic
export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// prop = property to change
// value = amount to change by
// state = obj "state" to call on
export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

// let plant = { soil: 0, light: 0, water: 0, attack: 0, health: 0 };

// 
export const photosynthesis = changeState("light");
export const feedWater = changeState("water");
// give fertilizer
export const giveF = changeState("soil");
export const setAttack = changeState("attack");
export const setHealth = changeState("health");


/*
Make sure to include tests, to separate your logic, and to use webpack. Once you have completed the example shown in the coursework, try adding the following functionality.

Add functionality to create multiple plants. Remember that we can use closures to store state about different objects.

Add functionality so different plants have different abilities. Use composition to add these abilities.

Build out a fully functioning game where users can feed their plants. This could include a UI, special powerups, and any creative functionality you might want to add!
*/
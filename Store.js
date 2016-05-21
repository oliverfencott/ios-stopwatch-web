import { createStore } from 'redux';

// Constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Actions
const incrementCounter = { type: INCREMENT };
const decrementCounter = { type: DECREMENT };

// Reducer
function counter(state = { count: 0 }, action) {
  const { count } = state;

  if (action.type === INCREMENT) {
    return { count: count + 1 };
  } else if (action.type === DECREMENT) {
    return { count: count - 1 };
  } else {
    return state;
  }
}

// Store
const Store = createStore(counter);

export { incrementCounter };
export { decrementCounter };
export default Store;

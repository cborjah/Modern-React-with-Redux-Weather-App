import { FETCH_WEATHER } from '../actions/index';


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ]; // Spread operator concats action.payload.data onto the end of the array in this case.
  }
  return state;
}

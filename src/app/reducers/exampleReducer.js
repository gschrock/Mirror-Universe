import { incrementCounter, apiDataFetched } from '../actions/exampleActionCreators.js';
import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
  triMet: {
    name: 'a man needs a name',
    count: 0,
  },
});

export const exampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case ('incrementCounter'):
      return state.setIn(['triMet', 'count'], Immutable.fromJS(action.count));
    case ('apiDataFetched'):
      return state.setIn(['triMet', 'resultSet'], Immutable.fromJS(action.result));
    default: return state;
  }
};

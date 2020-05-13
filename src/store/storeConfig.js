import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  numeros: function(state, action) {
    console.log('Reducer de Números');
    console.log(state, ' ', action);

    switch(action.type) {
      case 'NUM_MIN_ALTERADO':
        return {
          ...state,
          min: action.payload
        }
      default:
        return {
          min: 7,
          max: 31
        };
    }
  },
  nomes: function(state, action) {
    console.log('Reducer de Nomes');
    console.log(state, ' ', action);
    return [
      'Ana',
      'Maria',
      'Carlos'
    ]
  }
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
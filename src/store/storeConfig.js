import { createStore, combineReducers } from 'redux';

import numeroReducer from './reducers/numeros';
import nomesReducer from './reducers/nomes';

const reducers = combineReducers({
  numeros: numeroReducer,
  nomes: nomesReducer
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
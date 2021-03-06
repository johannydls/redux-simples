import { 
  NUM_MIN_ALTERADO,
  NUM_MAX_ALTERADO
} from './actionTypes';

// Action Creator
export function changeMin(newValue) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: newValue
  };
};

export function changeMax(newValue) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: newValue
  };
};
import * as actionType from './ActionType';

export const addCounter = () => ({
  type: "ADD_COUNTER",
  payload: 1
})

export const removeCounter = () => ({
    type: "REMOVE_COUNTER",
    payload: 1
  });
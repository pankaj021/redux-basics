// import * as actionType from '../actions/ActionType';

const memberList = (state={} , action) => {
  let newState = state;
  switch (action.type) {
    case "LOAD_HAVELI_DATA" : 
      newState = action.payload
      console.log("reducer ready to set the data....")
      return newState
    default :
      return newState ; 
  }
}

export default memberList;
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';



const errorReducer = (state = [], action) => {
  Object.freeze(action);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return [];

  }

};

export default errorReducer;

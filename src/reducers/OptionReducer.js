import {
    OPTIONS_FETCH, OPTION_SAVE
  } from '../actions/types';
  
  const INITIAL_STATE = {
    allOptions: [],
    yup: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case OPTIONS_FETCH:
        return {...state, yup: action.payload};
      case OPTION_SAVE:
          return {...state, allOptions: action.payload};
      default:
        return state;
    }
  };
import {
    OPTIONS_FETCH, OPTION_SAVE
  } from '../actions/types';
  
  const INITIAL_STATE = {
    description: '',
    proName: '',
    proVal: '',
    conName: '',
    conVal: ''
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case OPTIONS_FETCH:
        return {...state};
      case OPTION_SAVE:
        return {...state, 
            description: action.payload.description,
            proName: action.payload.proName,
            proVal: action.payload.proVal,
            conName: action.payload.conName,
            conVal: action.payload.conVal
          };
          // allOptions: state.allOptions.push(state.option)};
      default:
        return state;
    }
  };
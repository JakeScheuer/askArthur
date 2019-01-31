import {  OPTIONS_FETCH, ADD_OPTION, NEW_DECISION } from '../actions/types';

const INITIAL_STATE = {
    allOptions: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_OPTION:
            state.allOptions.push(action.payload);
            return { ...state };
        case OPTIONS_FETCH:
            return { ...state };
        case NEW_DECISION:
            state.allOptions = [];
            return { ...state };
        default:
            return state;
    }
  };
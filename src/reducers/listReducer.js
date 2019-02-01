import {  OPTIONS_FETCH, ADD_OPTION, NEW_DECISION, DELETE_OPTION } from '../actions/types';

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
        case DELETE_OPTION:
            state.allOptions.splice(action.payload, 1);
            return { ...state };
        default:
            return state;
    }
  };
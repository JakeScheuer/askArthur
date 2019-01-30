import {  OPTIONS_FETCH, ADD_OPTION } from '../actions/types';

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
        default:
            return state;
    }
  };
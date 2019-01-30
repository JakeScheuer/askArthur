import { OPTION_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    description: '',
    proName: '',
    proVal: '',
    conName: '',
    conVal: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPTION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
  };
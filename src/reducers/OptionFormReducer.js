import { 
    OPTION_UPDATE,
    OPTION_SAVE
} from '../actions/types';

const INITIAL_STATE = {
    description: '',
    proName: '',
    proVal: '', 
    conName: '', 
    conVal: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OPTION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case OPTION_SAVE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
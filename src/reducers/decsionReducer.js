import { 
        DECSION,
        COMPLEXITY,
        IMPACT
    } from '../actions/types'

const INITAL_STATE = { 
        decsionName: '',
        impactValue: '',
        complexityValue: ''
};

export default (state = INITAL_STATE, action) => {
        switch (action.type) {
        case DECSION:
                return { ...state, decsionName: action.payload };
        case COMPLEXITY:
                return { ...state, ...state, [action.payload.prop]: action.payload.value };
        case IMPACT:
                return { ...state, ...state, [action.payload.prop]: action.payload.value };
        default:
                return state;
    }
};
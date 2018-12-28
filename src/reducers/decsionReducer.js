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
                return { ...state, complexityValue: action.payload };
        case IMPACT:
                return { ...state, impactValue: action.payload };
        default:
                return state;
    }
};
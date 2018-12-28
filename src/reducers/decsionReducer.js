import { 
        DECSION,
        COMPLEXITY,
        IMPACT,
        OPTION_TITLE,
        PRO_NAME,
        PRO_VAL,
        CON_NAME,
        CON_VAL 
    } from '../actions/types'

const INITAL_STATE = { 
        decsionName: '',
        impactValue: '',
        complexityValue: '',
        optionName: '',
        proName: '',
        conName: '',
        proValue: '',
        conValue: ''
};

export default (state = INITAL_STATE, action) => {
        switch (action.type) {
        case DECSION:
                return { ...state, decsionName: action.payload };
        case COMPLEXITY:
                return { ...state, complexityValue: action.payload };
        case IMPACT:
                return { ...state, impactValue: action.payload };
        case OPTION_TITLE:
                return { ...state, optionName: action.payload };
        case PRO_NAME:
                return { ...state, proName: action.payload };
        case PRO_VAL:
                return { ...state, proValue: action.payload };
        case CON_NAME:
                return { ...state, conName: action.payload };
        case CON_VAL:
                return { ...state, conValue: action.payload };
        default:
                return state;
    }
};
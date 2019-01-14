import { 
    DECSION,
    COMPLEXITY,
    IMPACT,
    OPTION_TITLE,
    PRO_NAME,
    PRO_VAL,
    CON_NAME,
    CON_VAL 
} from './types'

export const decsionEntered = (text) => {
    return {
        type: DECSION,
        payload: text
    };
};
export const complexityEntered = ({ prop, value }) => {
    return {
        type: COMPLEXITY,
        payload: { prop, value }
    };
};
export const impactEntered = ({ prop, value }) => {
    return {
        type: IMPACT,
        payload: { prop, value }
    };
};

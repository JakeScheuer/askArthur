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
export const complexityEntered = (text) => {
    return {
        type: COMPLEXITY,
        payload: text
    };
};
export const impactEntered = (text) => {
    return {
        type: IMPACT,
        payload: text
    };
};
export const optionTitleEntered = (text) => {
    return {
        type: OPTION_TITLE,
        payload: text
    };
};
export const proNameEntered = (text) => {
    return {
        type: PRO_NAME,
        payload: text
    };
};
export const proValEntered = (text) => {
    return {
        type: PRO_VAL,
        payload: text
    };
};
export const conNameEntered = (text) => {
    return {
        type: CON_NAME,
        payload: text
    };
};
export const conValEntered = (text) => {
    return {
        type: CON_VAL,
        payload: text
    };
};

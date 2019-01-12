import { Actions } from 'react-native-router-flux';
import { OPTION_UPDATE, OPTIONS_FETCH, OPTION_SAVE } from './types';

export const optionUpdate = ({ prop, value }) => {
    return {
        type: OPTION_UPDATE,
        payload: { prop, value }
    };
};

export const optionsFetch = ( ) => {
    return {
        type: OPTIONS_FETCH
    };
};

export const optionCreate = ({ description, proName, proVal, conName, conVal }) => {
    return {
        type: OPTION_SAVE,
        payload: { description, proName, proVal, conName, conVal }
    };
};

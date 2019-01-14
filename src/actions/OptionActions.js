import { Actions } from 'react-native-router-flux';
import { OPTION_UPDATE, OPTIONS_FETCH, OPTION_SAVE } from './types';

export const optionUpdate = ({ prop, value }) => {
    return {
        type: OPTION_UPDATE,
        payload: { prop, value }
    };
};

export const optionsFetch = (yup) => {
    return {
        type: OPTIONS_FETCH,
        payload: yup
    };
};

export const optionCreate = (createdOption) => {
    return {
        type: OPTION_SAVE,
        payload: createdOption
    };
};

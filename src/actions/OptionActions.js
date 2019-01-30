import { OPTIONS_FETCH, ADD_OPTION, OPTION_UPDATE } from './types';

export const optionFetch = () => {
    return {
      type: OPTIONS_FETCH
    };
  };

  export const addOption = (option) => {
    return {
      type: ADD_OPTION,
      payload: option
    };
  };

  export const optionUpdate = ({ prop, value }) => {
    return {
      type: OPTION_UPDATE,
      payload: { prop, value }
    };
  };

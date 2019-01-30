import { TITLE_UPDATE, IMPACT_CHANGED, COMPLEXITY_CHANGED } from './types';

export const titleChanged = (text) => {
    return {
      type: TITLE_UPDATE,
      payload: text
    };
  };

export const impactChanged = (value) => {
    return {
      type: IMPACT_CHANGED,
      payload: value
    };
  };

  export const complexityChanged = (value) => {
    return {
      type: COMPLEXITY_CHANGED,
      payload: value
    };
  };
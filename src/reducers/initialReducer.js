import { TITLE_UPDATE, IMPACT_CHANGED, COMPLEXITY_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    description: '',
    impactValue: '',
    complexityValue: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case TITLE_UPDATE:
        return { ...state, description: action.payload };
      case IMPACT_CHANGED:
        return { ...state, impactValue: action.payload };
      case COMPLEXITY_CHANGED:
        return { ...state, complexityValue: action.payload };
      default:
        return state;
    }
  };
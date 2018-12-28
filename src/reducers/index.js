import { combineReducers } from 'redux';
import decsionReducer from './decsionReducer';
import OptionFormReducer from './OptionFormReducer';
import OptionReducer from './OptionReducer';

export default combineReducers({
    decsionInfo: decsionReducer,
    optionForm: OptionFormReducer,
    options: OptionReducer
});
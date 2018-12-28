import { combineReducers } from 'redux';
import decsionReducer from './decsionReducer';

export default combineReducers({
    decsionInfo: decsionReducer
});
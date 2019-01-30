import { combineReducers } from 'redux';
import initialReducer from './initialReducer';
import listReducer from './listReducer';
import formReducer from './formReducer';


export default combineReducers({
    initial: initialReducer,
    list: listReducer,
    form: formReducer
});
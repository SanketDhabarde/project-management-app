import authreducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authreducer,
    project: projectReducer
});

export default rootReducer;
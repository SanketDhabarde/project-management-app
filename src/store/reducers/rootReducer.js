import authreducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authreducer,
    project: projectReducer,
    firestore: firestoreReducer //whatever changes happens in collection it reacts to it and change the state
});

export default rootReducer;
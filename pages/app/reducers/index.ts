import { combineReducers } from 'redux';

import { AuthReducer } from './authReducer';

export const Reducers = combineReducers({
    authState: AuthReducer
});
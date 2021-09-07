import { combineReducers } from 'redux';

import { AuthReducer } from './authReducer';
import { UserReducer } from './userReducer';

export const Reducers = combineReducers({
    authState: AuthReducer,
    userState: UserReducer
});
import { AUTHENTICATE_VALUE } from '../actions/actionTypes';

import IReducerAuth from '../../types/IReducerAuth';

const initialState: IReducerAuth = {
    isAuthenticated: false
};

export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTHENTICATE_VALUE:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        default:
            return state;
    }
};
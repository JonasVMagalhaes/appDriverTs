import { AUTHENTICATE_VALUE } from '../actions/actionTypes';

const initialState = {
    isAuthenticated: "Aqui recebe se está logado ou não"
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
import { USER_VALUE } from '../actions/actionTypes';

const initialState = {
    user: "Aqui recebe os dados do User"
};

export const UserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_VALUE:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};
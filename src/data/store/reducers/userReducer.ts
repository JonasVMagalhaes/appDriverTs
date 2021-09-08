import { USER_VALUE } from '../actions/actionTypes';

import IReducerUser from '../../types/IReducerUser';

const initialState: IReducerUser = {
    id: "",
    nome: "",
    email: "",
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
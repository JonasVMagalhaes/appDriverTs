import {
    AUTHENTICATE_VALUE,
    USER_VALUE
} from './actionTypes';

export const setAuthenticate = (value: any) => ({
    type: AUTHENTICATE_VALUE,
    isAuthenticated: value
});

export const setUser = (value: any) => ({
    type: USER_VALUE,
    user: value
});
import { AUTHENTICATE_VALUE } from './actionTypes';

export const setAuthenticate = (value: any) => ({
    type: AUTHENTICATE_VALUE,
    isAuthenticated: value
});
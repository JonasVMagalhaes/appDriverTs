import { AUTHENTICATE_VALUE } from './actionTypes';

export const Authenticate = (value: any) => ({
    type: AUTHENTICATE_VALUE,
    isAuthenticated: value
});
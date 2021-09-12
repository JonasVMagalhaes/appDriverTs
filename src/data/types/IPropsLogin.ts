import IReducerUser from "./IReducerUser";

export default interface IPropsLogin {
    dispatch: any,
    isAuthenticated: any,
    user: IReducerUser
}
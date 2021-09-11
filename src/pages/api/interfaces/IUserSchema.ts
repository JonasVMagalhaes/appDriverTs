export default interface IUserSchema {
    id: string;
    name: string;
    email: string;
    profile: string;
    md5Password: string;
    jwtPassword: "";
}
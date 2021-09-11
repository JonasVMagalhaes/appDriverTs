import { encrypterPasswordMd5 } from "../helpers/md5Helper";
import { generatePasswordJWT } from "../helpers/jwtHelper";

import IAuth from "../interfaces/IAuth";
import IResponse from "../interfaces/IResponse";

import {
    recoveryUserByLoginAndHashPassword,
    updateJWTPasswordUser
} from "../managers/userManager";

export async function loginWithEmailAndPassword(credentials: IAuth): Promise<IResponse> {
    const md5Password: string = encrypterPasswordMd5(credentials.password);

    const user: any = await recoveryUserByLoginAndHashPassword(credentials.email, md5Password);
    if (!user) return { status: 400, response: "Login e senha não correspondem" };

    const jwtPassword: string = generatePasswordJWT(md5Password);

    const updateJwt: any = await updateJWTPasswordUser(credentials.email, jwtPassword);
    if (updateJwt.modifiedCount === 0) return { status: 400, response: "Ocorreu um erro ao realizar a requisição" };

    return { status: 200, response: jwtPassword }
}


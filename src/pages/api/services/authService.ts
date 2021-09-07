import { encrypterPasswordMd5 } from "../helpers/md5Helper";
import { generatePasswordJWT } from "../helpers/jwtHelper";

import { IResponse } from "../interfaces/responseInterface";

import {
    recoveryUserByLoginAndHashPassword,
    updateJWTPasswordUser
} from "../managers/userManager";

export async function loginWithEmailAndPassword(email: string, password: string): Promise<IResponse> {
    const md5Password: string = encrypterPasswordMd5(password);

    const user: any = await recoveryUserByLoginAndHashPassword(email, md5Password);
    if (!user) return { status: 400, response: "Login e senha não correspondem" };

    const jwtPassword: string = generatePasswordJWT(md5Password);

    const updateJwt: any = await updateJWTPasswordUser(email, jwtPassword);
    if (updateJwt.modifiedCount === 0) return { status: 400, response: "Ocorreu um erro ao realizar a requisição" };

    return { status: 200, response: jwtPassword }
}


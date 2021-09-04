import { encrypterPasswordMd5 } from "../helpers/md5Helper";
import { generatePasswordJWT } from "../helpers/jwtHelper";

export async function loginWithEmailAndPassword(email: string, password: string) {
    const md5Password = encrypterPasswordMd5(password);
    const jwtPassword = generatePasswordJWT(md5Password);

    return { status: 200, json: jwtPassword }
}


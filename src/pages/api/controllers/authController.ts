import { NextApiRequest } from "next";

import IAuth from "../interfaces/IAuth";
import IResponse from "../interfaces/IResponse";

import { loginWithEmailAndPassword } from "../services/authService";

export default async function authController(req: NextApiRequest): Promise<IResponse> {
    switch (req.method) {
        case "POST": return await postAuthService(req);

        default: return await notMethodFinded(req);
    }
}

const postAuthService = async (req: NextApiRequest): Promise<IResponse> => {
    const credentials: IAuth = req.body;
    return await loginWithEmailAndPassword(credentials);
}

const notMethodFinded = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: `Method ${req.method} is not valid` };
}
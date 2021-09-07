import { NextApiRequest } from "next";

import { IResponse } from "../interfaces/responseInterface";

import { loginWithEmailAndPassword } from "../services/authService";

export default async function authController(req: NextApiRequest): Promise<IResponse> {
    switch (req.method) {
        case "GET": return await getAuthService(req);
        case "POST": return await postAuthService(req);
        case "PUT": return await putAuthService(req);
        case "DELETE": return await deleteAuthService(req);

        default: return await notMethodFinded(req);
    }
}

const getAuthService = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: "Teste Get" };
}

const postAuthService = async (req: NextApiRequest): Promise<IResponse> => {
    const { email, password } = req.body;
    return await loginWithEmailAndPassword(email, password);
}

const putAuthService = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: "Teste Put" };
}

const deleteAuthService = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: "Teste Delete" };
}

const notMethodFinded = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: `Method ${req.method} is not valid` };
}
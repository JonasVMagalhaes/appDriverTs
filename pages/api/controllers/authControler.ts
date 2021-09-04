import { NextApiRequest } from "next";

import loginWithEmailAndPassword from "../services/authService";

export default async function authController(req: NextApiRequest) {
    switch (req.method) {
        case "GET": return await getAuthService(req);
        case "POST": return await postAuthService(req);
        case "PUT": return await putAuthService(req);
        case "DELETE": return await deleteAuthService(req);

        default: return await notMethodFinded(req);
    }
}

const getAuthService = async (req: NextApiRequest) => {
    return "Teste Get";
}

const postAuthService = async (req: NextApiRequest) => {
    const { email, password } = req.body;
    return await loginWithEmailAndPassword(email, password);
}

const putAuthService = async (req: NextApiRequest) => {
    return "Teste Put";
}

const deleteAuthService = async (req: NextApiRequest) => {
    return "Teste Delete";
}

const notMethodFinded = async (req: NextApiRequest) => {
    return `Method ${req.method} not found.`;
}
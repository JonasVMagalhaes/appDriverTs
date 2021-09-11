import { NextApiRequest } from "next";

import { createNewUser } from "../services/userService";

import { IResponse } from "../interfaces/responseInterface";

export default async function userController(req: NextApiRequest): Promise<IResponse> {
    switch (req.method) {
        case "POST": return await createUser(req);

        default: return await notMethodFinded(req);
    }
}

const createUser = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: createNewUser() };
}

const notMethodFinded = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: `Method ${req.method} is not valid` };
}
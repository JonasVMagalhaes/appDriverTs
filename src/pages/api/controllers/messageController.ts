import { NextApiRequest } from "next";

import IResponse from "../interfaces/IResponse";

import { sendMessage } from "../services/messageService";

export default async function messageController(req: NextApiRequest): Promise<IResponse> {
    switch (req.method) {
        case "POST": return await sendMessage(req);

        default: return await notMethodFinded(req);
    }
}

const notMethodFinded = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: `Method ${req.method} is not valid` };
}
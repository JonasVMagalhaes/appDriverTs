import { NextApiRequest } from "next";

import IResponse from "../interfaces/IResponse";

export default async function messageController(req: NextApiRequest): Promise<IResponse> {
    switch (req.method) {
        default: return await notMethodFinded(req);
    }
}

const notMethodFinded = async (req: NextApiRequest): Promise<IResponse> => {
    return { status: 200, response: `Method ${req.method} is not valid` };
}
import { NextApiRequest, NextApiResponse } from "next";

import messageController from "../../../controllers/messageController";

import IResponse from "../../../interfaces/IResponse";

const message = async (req: NextApiRequest, res: NextApiResponse) => {
    const response: IResponse = await messageController(req);
    return res.send(response);
}

export default message;
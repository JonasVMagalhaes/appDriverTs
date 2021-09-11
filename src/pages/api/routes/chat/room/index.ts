import { NextApiRequest, NextApiResponse } from "next";

import roomController from "../../../controllers/roomController";

import IResponse from "../../../interfaces/IResponse";

const room = async (req: NextApiRequest, res: NextApiResponse) => {
    return res.send({status: 200, response: ""})
    const response: IResponse = await roomController(req);
    return res.send(response);
}

export default room;
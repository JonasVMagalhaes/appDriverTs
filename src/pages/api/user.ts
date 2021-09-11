import { NextApiRequest, NextApiResponse } from "next";

import userController from "./controllers/userController";

import { IResponse } from "./interfaces/responseInterface";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: IResponse = await userController(req);
  return res.send(response);
}

export default auth;
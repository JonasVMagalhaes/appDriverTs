import { NextApiRequest, NextApiResponse } from "next";

import authController from "./controllers/authController";

import IResponse from "./interfaces/IResponse";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: IResponse = await authController(req);
  return res.send(response);
}

export default auth;
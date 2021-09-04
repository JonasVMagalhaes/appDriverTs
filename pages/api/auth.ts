import { NextApiRequest, NextApiResponse } from "next";

import authController from "./controllers/authControler";

import { IResponse } from "./interfaces/responseInterface";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: IResponse = await authController(req);
  return res.send(response);
}

export default auth;
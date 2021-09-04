import { NextApiRequest, NextApiResponse } from "next";

import authController from "./controllers/authControler";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: any = await authController(req);
  return res.send(response);
}

export default auth;
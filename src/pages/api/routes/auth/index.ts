import { NextApiRequest, NextApiResponse } from "next";

import authController from "../../controllers/authController";

import IResponse from "../../interfaces/IResponse";

const auth = async (req: NextApiRequest, res: NextApiResponse) => {
  const response: IResponse = await authController(req);
  return res.send(response);
}

export default auth;

export const config = {
  api: {
      /* Configurações da rota */
      bodyParser: {
          // sizeLimit: '1kb' // Define o limite do json recebido
      }
  }
}
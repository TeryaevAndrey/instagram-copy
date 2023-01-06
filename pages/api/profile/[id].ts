import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "GET") {
    try {
      const {id} = req.query;

      const user = await User.findById({_id: id});
  
      res.json(JSON.stringify(user));
    } catch(err) {
      res.status(500).json({message: "Ошибка сервера"});
    }
  }
}

export default handler;
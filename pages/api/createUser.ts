import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoDb";
import User from "../../models/User";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST") {
    try {
      const {tel, email, firstName, secondName, userName, password} = req.body;

      if((tel || email) && firstName && secondName && userName && password) {
        const passwordHash = await bcrypt.hash(password, 12);

        const user = new User({
          tel: tel ? tel : "",
          email: email ? email : "",
          firstName,
          secondName,
          userName,
          passwordHash
        });

        await user.save();

        res.status(201).json({message: "Пользователь создан успешно!"});
      } else {
        
      }
    } catch (err) {
      res.status(500).json({message: "Ошибка сервера", err});
    }
  } else {
    res.status(500).json({message: "Ошибка сервера"});
  }
}

export default handler;
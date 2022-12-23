import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../middleware/mongoDb";
import User from "../../models/User";
import { IRegUser } from "../../types";

connectDb();

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === "POST") {
    try {
      const {contact, realName, userName, password}: IRegUser = req.body;

      if(contact && realName && userName && password) {
        const passwordHash = await bcrypt.hash(password, 12);

        const user = await new User({
          contact,
          realName, 
          userName,
          password: passwordHash
        });

        await user.save();

        res.status(201).json({message: "Пользователь создан успешно!"});
      }
    } catch (err) {
      res.status(500).json({message: "Ошибка сервера", err});
    }
  } else {
    res.status(500).json({message: "Неподходящий запрос"});
  }
}

export default handler;
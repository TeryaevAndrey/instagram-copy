import { NextApiRequest, NextApiResponse } from "next";
import connectDb from "../../../middleware/mongoDb";
import User from "../../../models/User";
import { ILoginUser } from "../../../types";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import config from "config";

connectDb();

const secretKey: string = config.get("secretKey");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { contact, password }: ILoginUser = req.body;

      if (contact && password) {
        const user: any = await User.findOne({ contact}) || await User.findOne({userName: contact});

        if (!user) {
          return res.status(400).json({ message: "Пользователь не найден" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
          return res.status(400).json({message: "Неверный пароль"});
        }

        const token = jsonwebtoken.sign(
          { userId: user._id, userName: user.userName },
          secretKey,
          {
            expiresIn: "7d",
          }
        );

        await user.updateOne({contact}, {$set: {online: true}});

        return res.status(200).json({
          message: "Успешно!",
          token,
          userId: user.id,
          userName: user.userName,
        });
      }
    } catch {
      res.status(500).json({ message: "Ошибка сервера" });
    }
  } else {
    res.status(400).json({ message: "Неподходящий запрос" });
  }
};

export default handler;

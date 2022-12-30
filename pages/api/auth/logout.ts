import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "PATCH") {
        try {
            const {_id} = req.body;

            const user = await User.findById({_id});

            if(user) {
                await user.updateOne({$set: {online: false}});

                return res.json({message: "Успешно"});
            } else {
                res.status(400).json({message: "Пользователя не существует"});
            }
        } catch(err) {
            res.status(500).json({message: "Ошибка сервера"});
        }
    } else {
        res.status(500).json({message: "Неподходящий запрос"});
    }
}

export default handler;
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const connectDb = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB}`);
  } catch (err) {
   res.status(500).json("Ошибка сервера");
  }
};

export default connectDb;
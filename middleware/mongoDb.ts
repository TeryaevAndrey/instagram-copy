import {connect, set} from "mongoose";
import config from "config";

const mongoUrl: string = config.get("mongoUrl");

const connectDb = async () => {
  await connect(`${mongoUrl}`).then(() => console.log("Success")).catch(err => console.log(err));
};

export default connectDb;
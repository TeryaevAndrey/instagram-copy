import {connect} from "mongoose";

const connectDb = async () => {
  await connect(`${process.env.NEXT_PUBLIC_MONGO_URL}`).then(res => console.log(res)).catch(err => console.log(err));
};

export default connectDb;
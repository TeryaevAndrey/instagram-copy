import {Schema, model} from "mongoose";

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  contact: {
    type: String,
    required: true
  },
  realName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default model("User") || model("User", userSchema);
import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
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

export default mongoose.model("User", userSchema);
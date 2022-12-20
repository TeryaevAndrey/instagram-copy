import mongoose from "mongoose";

let Schema = mongoose.Schema;

const userSchema = new Schema({
  tel: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: true
  },
  secondName: {
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
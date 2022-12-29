import {Schema, model, models} from "mongoose";

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
  },
  online: {
    type: Boolean,
    required: true
  }
});

export default models.User ||  model("User", userSchema);
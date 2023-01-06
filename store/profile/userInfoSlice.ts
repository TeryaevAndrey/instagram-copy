import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface InitialState {
  userInfo: User;
}

const initialState: InitialState = {
  userInfo: {
    contact: undefined,
    realName: undefined,
    userName: undefined,
    online: undefined,
    publications: undefined,
    followers: undefined,
    following: undefined,
  },
};

export const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const {setUserInfo} = userInfoSlice.actions;
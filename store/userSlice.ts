import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInfo } from "../types";

interface InitialState {
  userInfo: IUserInfo;
}

const initialState: InitialState = {
  userInfo: {
    token: undefined,
    userId: undefined,
    userName: undefined
  }
}

export const userSlice = createSlice({
  name: "userSlice", 
  initialState,
  reducers: {
     setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
        state.userInfo = action.payload;
     }
  }
});

export const {setUserInfo} = userSlice.actions;


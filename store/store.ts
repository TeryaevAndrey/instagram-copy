import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { userInfoSlice } from "./profile/userInfoSlice";
import { regSlice } from "./regSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    reg: regSlice.reducer,
    login: loginSlice.reducer,
    user: userSlice.reducer,
    userInfo: userInfoSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { regSlice } from "./regSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    reg: regSlice.reducer,
    login: loginSlice.reducer,
    user: userSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
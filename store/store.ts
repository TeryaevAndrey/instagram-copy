import { configureStore } from "@reduxjs/toolkit";
import { regSlice } from "./regSlice";

export const store = configureStore({
  reducer: {
    reg: regSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
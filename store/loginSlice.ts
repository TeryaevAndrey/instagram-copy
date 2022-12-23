import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { ILoginError } from "../types";

interface InitialState { 
  error: ILoginError;
}

const initialState: InitialState = {
  error: {
    isError: false,
    message: undefined,
  }
}

export const loginSlice = createSlice({
  name: "loginSlice", 
  initialState,
  reducers: {
    changeError: (state, action: PayloadAction<ILoginError>) => {
      state.error = action.payload;
    }
  }
});

export const {changeError} = loginSlice.actions;


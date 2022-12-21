import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IRegError } from "../types";

interface InitialState {
  error: IRegError;
}

const initialState: InitialState = {
  error: {
    isError: false,
    message: undefined
  }
}

export const regSlice = createSlice({
  name: "regSlice", 
  initialState,
  reducers: {
    changeIsError: (state, action: PayloadAction<IRegError>) => {
      state.error = action.payload;
    }
  }
});

export const {changeIsError} = regSlice.actions;
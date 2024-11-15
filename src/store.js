import { createSlice, configureStore } from "@reduxjs/toolkit";
import stageReducer from "./reducers/stageReducer";
const stageSlice = createSlice({
  name: "stage",
  initialState: {
    value: page1,
  },
  reducers: {
    stageReducer,
  },
});

const store = configureStore({
  reducer: stageSlice.reducer,
});

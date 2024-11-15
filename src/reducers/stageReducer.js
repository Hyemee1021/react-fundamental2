import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "page1",
  status: null,
};

const stageSlice = createSlice({
  name: "stage",
  initialState,
  reducers: {
    goToPage1: (state) => {
      state.currentPage = "page1";
      state.status = null;
    },
    goToPage2: (state) => {
      state.currentPage = "page2";
    },
    goToSubmit: (state) => {
      state.currentPage = "submitting";
    },
    submitSuccess: (state) => {
      state.status = "success";
    },
    submitFail: (state) => {
      state.status = "fail";
    },
    resetForm: (state) => {
      state.currentPage = "page1";
      state.status = null;
    },
  },
});

export const {
  goToPage1,
  goToPage2,
  goToSubmit,
  submitFail,
  submitSuccess,
  resetForm,
} = stageSlice.actions;

const store = configureStore({
  reducer: stageSlice.reducer,
});

export default store;

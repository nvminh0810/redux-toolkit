import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/Student/studentSlice";
import cityReducer from "../features/City/citySlice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
    city: cityReducer,
  },
});

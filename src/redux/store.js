import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./features/greetings/greetingSlice";

const store = configureStore({
  reducer: {
    greeting: greetingReducer
  }
})

export default store;

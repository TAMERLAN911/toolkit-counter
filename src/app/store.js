import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/cunterReducer";

export const store = configureStore({
    reducer: counterReducer
})
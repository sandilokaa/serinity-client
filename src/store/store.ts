import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import searchItemReducer from "./slice/SearchItemSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            searchItem: searchItemReducer
        },
    });

export type RootState = ReturnType<typeof makeStore>["getState"];
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];

export const wrapper = createWrapper(makeStore);
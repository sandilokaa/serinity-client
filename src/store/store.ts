import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import searchItemReducer from "./slice/SearchItemSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            searchItem: searchItemReducer
        },
    });

export  const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import searchItemReducer from "./slice/SearchItemSlice";
import newArrivalReducer from "./slice/NewArrivalSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            searchItem: searchItemReducer,
            newArrival: newArrivalReducer,
        },
    });

export  const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore);
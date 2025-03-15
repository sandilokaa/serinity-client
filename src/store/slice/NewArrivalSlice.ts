/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchDataParams {
    name?: string;
    category?: string | null;
}

interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    sale: boolean;
    new_arrival: boolean;
    images: {image_url: string}[];
}

interface NewArrivalSlice {
    data: Item[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const fetchData = createAsyncThunk<Item[], FetchDataParams>(
    "/data/fetchData",
    async () => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/items`
            );
            return response.data.data;
        } catch (error: any) {
            console.error("API Error:", error.message);
            throw error;
        }
    }
);

const initialState: NewArrivalSlice = {
    data: [],
    status: "idle",
    error: null,
};

const newArrivalSlice = createSlice({
    name: "newArrival",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchData.fulfilled, (state, action: PayloadAction<Item[]>) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message || "Something went wrong";
        });
    },
});

import type { RootState } from "../store";

export const selectNewArrivalProducts = (state: RootState) => state.newArrival.data;
export const selectNewArrivalProductsStatus = (state: RootState) => state.newArrival.status;

export default newArrivalSlice.reducer;
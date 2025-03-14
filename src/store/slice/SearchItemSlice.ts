/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchDataParams {
    name?: string;
    category?: string;
}

interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    sale: boolean;
    images: {image_url: string}[];
}

interface SearchItemState {
    data: Item[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

export const fetchData = createAsyncThunk<Item[], FetchDataParams>(
    "/data/fetchData",
    async ({ name, category }) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/v1/items?` +
                (category ? `category=${category}` : "") +
                (name ? `&name=${name}` : "")
            );
            return response.data.data;
        } catch (error: any) {
            console.error("API Error:", error.message);
            throw error;
        }
    }
);

const initialState: SearchItemState = {
    data: [],
    status: "idle",
    error: null,
};

const searchItemSlice = createSlice({
    name: "searchItem",
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

export const selectSearchItemProducts = (state: RootState) => state.searchItem.data;
export const selectSearchItemProductsStatus = (state: RootState) => state.searchItem.status;

export default searchItemSlice.reducer;
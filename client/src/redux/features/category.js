import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Functions
export const createCat = createAsyncThunk("category/create", async (data) => {
  const res = await axios.post("/api/category/", data);
  return res.data;
});

export const getAllCat = createAsyncThunk("category/getAll", async (data) => {
  const res = await axios.get("/api/category/", data);
  return res.data;
});

const initialState = {
  pending: false,
  error: false,
  createdCategory: {},
  allCat: {},
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [createCat.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createCat.fulfilled]: (state, action) => {
      state.pending = false;
      state.createdCategory = action.payload;
    },
    [createCat.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getAllCat.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllCat.fulfilled]: (state, action) => {
      state.pending = false;
      state.allCat = action.payload;
    },
    [getAllCat.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default categorySlice.reducer;

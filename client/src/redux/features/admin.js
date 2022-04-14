import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Functions
export const signInAdmin = createAsyncThunk("admin/signIn", async (data) => {
  const res = await axios.post("/api/admin/signIn", data);
  if (res.data.username) {
    localStorage.setItem("loginInfo", JSON.stringify(res.data));
  }
  return res.data;
});

export const addAdmin = createAsyncThunk("admin/addAdmin", async (data) => {
  const res = await axios.post("/api/admin/add", data);
  return res.data;
});

export const uploadAdminPP = createAsyncThunk(
  "admin/uploadAdminPP",
  async (data) => {
    const res = await axios.post("/api/multer/adminPP", data);
    return res.data;
  }
);

export const getAllAdmin = createAsyncThunk("admin/getAllAdmin", async () => {
  const res = await axios.get("/api/admin/");
  return res.data;
});

const initialState = {
  pending: false,
  error: false,
  loginAdmin: {},
  addedAdmin: {},
  adminPP: {},
  allAdmins: [],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logout: (state) => {
      state.loginAdmin = initialState.loginAdmin;
    },
  },
  extraReducers: {
    [signInAdmin.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [signInAdmin.fulfilled]: (state, action) => {
      state.pending = false;
      state.loginAdmin = action.payload;
    },
    [signInAdmin.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [addAdmin.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [addAdmin.fulfilled]: (state) => {
      state.pending = false;
    },
    [addAdmin.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [uploadAdminPP.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [uploadAdminPP.fulfilled]: (state, action) => {
      state.pending = false;
      state.adminPP = action.payload;
    },
    [uploadAdminPP.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getAllAdmin.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAllAdmin.fulfilled]: (state, action) => {
      state.pending = false;
      state.allAdmins = action.payload;
    },
    [getAllAdmin.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;

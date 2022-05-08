import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

const initialState = {
  users: [],
  loading: false,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const users = await userApi.fetchUser();
  return users;
});

export const addUser = createAsyncThunk("/user/addUser", async (user) => {
  const data = await userApi.addUser(user);
  return data;
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (userId) => {
    const user = await userApi.deleteUser(userId);
    return user.id;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.loading = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    [fetchUser.rejected]: (state) => {
      state.loading = false;
    },
    [addUser.pending]: (state) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      state.loading = false;
    },
    [addUser.rejected]: (state) => {
      state.loading = false;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      const indexOfUser = state.users.findIndex(
        (user) => user.id === action.payload
      );
      if (indexOfUser !== -1) {
        state.users.splice(indexOfUser, 1);
      }
      state.loading = false;
    },
    [deleteUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

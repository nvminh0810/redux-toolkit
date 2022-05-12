import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from "api/studentApi";

const initialState = {
  students: [],
  pagination: {},
  filters: {
    _page: 1,
    _limit: 10,
    name_like: "",
  },
  loading: false,
};

export const fetchStudent = createAsyncThunk(
  "student/fetchStudent",
  async (filters = { _page: 1, _limit: 10 }) => {
    const response = await studentApi.fetchStudent(filters);
    return response;
  }
);

export const addStudent = createAsyncThunk(
  "/student/addStudent",
  async (student) => {
    const data = await studentApi.addStudent(student);
    return data;
  }
);

export const updateStudent = createAsyncThunk(
  "/student/updateStudent",
  async (student) => {
    const data = await studentApi.updateStudent(student);
    return data;
  }
);

export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (studentId, thunkApi) => {
    const student = await studentApi.deleteStudent(studentId);
    thunkApi.dispatch(fetchStudent());
    return student.id;
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: {
    [fetchStudent.pending]: (state) => {
      state.loading = true;
    },
    [fetchStudent.fulfilled]: (state, action) => {
      state.students = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    [fetchStudent.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { setFilters } = studentSlice.actions;

const studentReducer = studentSlice.reducer;
export default studentReducer;

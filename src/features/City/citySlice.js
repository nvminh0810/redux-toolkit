import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import cityApi from "../../api/cityApi";

const initialState = {
  cities: [],
};

export const fetchCity = createAsyncThunk("city/fetchCity", async () => {
  const cities = await cityApi.fetchCity();
  return cities;
});

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCity.fulfilled]: (state, action) => {
      state.cities = action.payload;
    },
  },
});

// Selectors
export const selectCities = (state) => state.city.cities;

export const selectCitiesMap = createSelector(selectCities, (cities) =>
  cities.reduce((map, city) => {
    map[city.code] = city;
    return map;
  }, {})
);

// Actions
export const {} = citySlice.actions;

// Reducer
const cityReducer = citySlice.reducer;
export default cityReducer;

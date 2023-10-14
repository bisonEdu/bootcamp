import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock.js";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map((review) => review.id),
};

const { reducer } = createSlice({
  name: "restaurant",
  initialState,
});

export default reducer;

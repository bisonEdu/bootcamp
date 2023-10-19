import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors.js";

export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = fetch("http://localhost:3001/api/restaurants/");

    return (await response).json();
  },
  {
    condition: (_, { getState }) => !selectRestaurantIds(getState())?.length,
  }
);

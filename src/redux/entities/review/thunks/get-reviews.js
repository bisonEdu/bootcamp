import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selectors.js";
export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId) => {
    const response = fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    return (await response).json();
  },
  {
    condition: (_, { getState }) => {
      selectReviewIds(getState())?.length;
    },
  }
);

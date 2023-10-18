import { configureStore } from "@reduxjs/toolkit";
import user from "./entities/user/index.js";
import restaurant from "./entities/restaurant/index.js";
import dish from "./entities/dish/index.js";
import review from "./entities/review/review.js";
import { loggerMiddleware } from "./middlewares/logger.js";

const store = configureStore({
  reducer: {
    user,
    restaurant,
    dish,
    review,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { outlayStringApi } from "./outlayStringApi";

export const store = configureStore({
  reducer: {
    [outlayStringApi.reducerPath]: outlayStringApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(outlayStringApi.middleware),
});

export * from "./outlayStringApi";

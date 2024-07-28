import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./features/auth/authSlice";
import { productApi } from "./api/products";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

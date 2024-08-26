import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonServerApi } from "../slice/apiSlice";
import AuthReducer from "../slice/authSlice";
import CartReducer from "../slice/cartSlice";
import ResReducer from "../slice/resSlice";
import HandlerReducer from "../slice/handlerSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "_user",
  version: 1,
  storage,
};
const persistConfigCart = {
  key: "_cart",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  AuthReducer
);

const persistedCartReducer = persistReducer(
  persistConfigCart,
  CartReducer
);

export const store = configureStore({
  reducer: {
    authReducer: persistedReducer,
    cartReducer: persistedCartReducer,
    handlerReducer: HandlerReducer,
    resReducer: ResReducer,
    [jsonServerApi.reducerPath]:
      jsonServerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(jsonServerApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../store/shoppingSlice";
// import { ShoppingList } from "./shoppingSlice";

import userReducer from "../store/user";

export const store = configureStore({
    reducer: {
        shopping: shoppingReducer,
        user: userReducer,
        },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;  
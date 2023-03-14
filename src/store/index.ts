import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStore = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
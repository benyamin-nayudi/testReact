import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
// import services from "./services";

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

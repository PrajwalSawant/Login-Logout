import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./slice/notesSlice";
import userSlice from "./slice/userSlice";

export default configureStore({
  reducer: {
    note: notesSlice,
    userData: userSlice,
  },
});

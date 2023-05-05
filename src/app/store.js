import { configureStore } from "@reduxjs/toolkit";
import managerTeamReducer from "../features/managerTeam/managerTeamSlice";

export default configureStore({
  reducer: {
    managerTeam: managerTeamReducer,
  },
});

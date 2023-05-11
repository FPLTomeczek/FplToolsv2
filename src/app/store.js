import { configureStore } from "@reduxjs/toolkit";
import managerTeamReducer from "../features/managerTeam/managerTeamSlice";
import playersReducer from "../features/players/playersSlice";

export default configureStore({
  reducer: {
    managerTeam: managerTeamReducer,
    players: playersReducer,
  },
});

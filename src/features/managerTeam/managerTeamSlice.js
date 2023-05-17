import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  picks: [],
  value: 0,
  freeTransfers: 0,
};

const managerTeamSlice = createSlice({
  name: "managerTeam",
  initialState,
  reducers: {
    picksAdded(state, action) {
      state.picks = action.payload;
    },
  },
});

export const { picksAdded } = managerTeamSlice.actions;

export default managerTeamSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  picks: [],
};

const managerTeamSlice = createSlice({
  name: "managerTeam",
  initialState,
  reducers: {
    picksAdded(state, action) {
      console.log(action.payload);
      state.picks = action.payload;
    },
  },
});

export const { picksAdded } = managerTeamSlice.actions;

export default managerTeamSlice.reducer;

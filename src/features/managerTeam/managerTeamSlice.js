import { createSlice } from "@reduxjs/toolkit";

const initialState = [{}];

const managerTeamSlice = createSlice({
  name: "managerTeam",
  initialState,
  reducers: {
    picksAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { picksAdded } = managerTeamSlice.actions;

export default managerTeamSlice.reducer;

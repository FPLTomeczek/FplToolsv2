import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  picks: [],
  value: 0,
  freeTransfers: 0,
  removedPicks: [],
};

const managerTeamSlice = createSlice({
  name: "managerTeam",
  initialState,
  reducers: {
    picksAdded(state, action) {
      state.picks = action.payload;
    },
    removePick(state, action) {
      const { index, element_type } = action.payload;
      if (
        !state.removedPicks.find(
          (removedPick) => removedPick.position === index
        )
      ) {
        state.removedPicks.push(state.picks[index]);
      }
      state.picks[index] = {
        web_name: "Blank",
        element_type,
        position: index,
      };
    },
    retrievePick(state, action) {
      const position = action.payload;
      const retrievedPick = state.removedPicks.find(
        (removedPick) => removedPick.position === position
      );
      state.picks[position] = retrievedPick;
      const index = state.removedPicks.indexOf(retrievedPick);
      state.removedPicks.splice(index, 1);
    },
    addPick(state, action) {
      const newPlayer = action.payload;
      const blankPlayerMatch = state.picks.find(
        (pick) =>
          pick.element_type === newPlayer.element_type &&
          pick.web_name == "Blank"
      );
      if (blankPlayerMatch) {
        state.picks[blankPlayerMatch.position] = {
          ...newPlayer,
          position: blankPlayerMatch.position,
        };
      }
    },
  },
});

export const { picksAdded, removePick, retrievePick, addPick } =
  managerTeamSlice.actions;

export default managerTeamSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { FIRST_ELEVEN_PLAYERS } from "../../constants";
import { isEmpty } from "lodash";

const initialState = {
  picks: JSON.parse(localStorage.getItem("fetchedPlayers")) || [],
  initialPicks: JSON.parse(localStorage.getItem("fetchedPlayers")),
  value: 0,
  freeTransfers: 0,
  removedPicks: [],
  playerToChange: {},
  playersAvailableToChange: [],
  chips: [],
};

const managerTeamSlice = createSlice({
  name: "managerTeam",
  initialState,
  reducers: {
    addPicks(state, action) {
      state.picks = action.payload;
    },
    addChips(state, action) {
      state.chips = action.payload;
    },
    removePick(state, action) {
      const { position, element_type } = action.payload;
      if (
        !state.removedPicks.find(
          (removedPick) => removedPick.position === position
        )
      ) {
        state.removedPicks.push(state.picks[position]);
      }
      state.picks[position] = {
        web_name: "Blank",
        element_type,
        position,
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
    makeChange(state, action) {
      const id = action.payload;
      const index = state.picks.map((pick) => pick.id).indexOf(id);

      if (!isEmpty(state.playerToChange)) {
        const playerToChangeIndex = state.picks
          .map((pick) => pick.id)
          .indexOf(state.playerToChange.id);
        state.picks[playerToChangeIndex] = state.picks[index];
        state.picks[index] = state.playerToChange;
        state.playerToChange = {};
        return;
      }
      state.playerToChange = state.picks[index];
    },
  },
});

export const {
  addPicks,
  removePick,
  retrievePick,
  addPick,
  makeChange,
  addChips,
} = managerTeamSlice.actions;

export default managerTeamSlice.reducer;

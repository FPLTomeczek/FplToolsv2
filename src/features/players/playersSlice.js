import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  playersList: [],
  playersHistory: [],
  status: "idle",
  error: null,
  filterOptions: { name: "", team: "ALL", role: "ALL" },
  sortOptions: { type: "price", value: "desc" },
};

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => {
    const response = await axiosInstance.get("/players");
    return response.data.players;
  }
);

export const fetchPlayersHistory = createAsyncThunk(
  "players/fetchPlayersHistory",
  async () => {
    const response = await axiosInstance.get("/players-history");
    return response.data.players;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    filterPlayers(state, action) {
      state.filterOptions = action.payload;
    },
    sortPlayers(state, action) {
      state.sortOptions = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.playersList = action.payload;
      })
      .addCase(fetchPlayersHistory.fulfilled, (state, action) => {
        state.playersHistory = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchPlayers.fulfilled, fetchPlayersHistory.fulfilled),
        (state, action) => {
          state.status = "success";
        }
      )
      .addMatcher(
        isAnyOf(fetchPlayers.rejected, fetchPlayersHistory.rejected),
        (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        }
      )
      .addMatcher(
        isAnyOf(fetchPlayers.pending, fetchPlayersHistory.pending),
        (state, action) => {
          state.status = "loading";
        }
      );
  },
});

export const { filterPlayers, sortPlayers } = playersSlice.actions;

export default playersSlice.reducer;

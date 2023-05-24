import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";

const initialState = {
  playersList: [],
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
      .addCase(fetchPlayers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.status = "success";
        state.playersList = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterPlayers, sortPlayers } = playersSlice.actions;

export default playersSlice.reducer;

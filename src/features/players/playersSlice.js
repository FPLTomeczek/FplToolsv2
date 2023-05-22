import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";
const initialState = {
  playersList: [],
  status: "idle",
  error: null,
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
  reducers: {},
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

export default playersSlice.reducer;

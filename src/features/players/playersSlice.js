import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils";
const initialState = {
  players: [],
};

export const fetchPlayers = createAsyncThunk(
  "players/fetchPlayers",
  async () => {
    const response = await axiosInstance.get("/players");
    console.log(response.data.players);
    return response.data.players;
  }
);

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {},
});

export default playersSlice.reducer;

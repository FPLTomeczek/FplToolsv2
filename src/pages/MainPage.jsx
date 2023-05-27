import { useRef } from "react";
import {
  getManagerTeam,
  getManagerChips,
} from "../components/features/transfer_planner/customHooks";
import { useDispatch } from "react-redux";
import { addPicks, addChips } from "../features/managerTeam/managerTeamSlice";
import TransferPlanner from "../components/features/transfer_planner/TransferPlanner";
import { Button, TextField, Box } from "@mui/material";

const MainPage = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const id = inputRef.current.value;
    e.preventDefault();
    const players = await getManagerTeam(id);
    const chips = await getManagerChips(id);
    console.log(players);
    console.log(chips);
    localStorage.setItem("fetchedPlayers", JSON.stringify(players));
    dispatch(addPicks(players));
    dispatch(addChips(chips));
  };

  return (
    <Box
      mt={2}
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <form>
        <TextField
          id="outlined-basic"
          label="Enter Your ID"
          variant="outlined"
          inputRef={inputRef}
          size="small"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </Button>
      </form>
      <TransferPlanner />
    </Box>
  );
};

export default MainPage;

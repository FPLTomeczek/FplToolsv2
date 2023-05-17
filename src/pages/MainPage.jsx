import { useRef } from "react";
import { getManagerTeam } from "../customHooks";
import { useDispatch } from "react-redux";
import { picksAdded } from "../features/managerTeam/managerTeamSlice";
import TransferPlanner from "../components/TransferPlanner";
import { Button, TextField, Box } from "@mui/material";

const MainPage = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const id = inputRef.current.value;
    e.preventDefault();
    const players = await getManagerTeam(id);
    dispatch(picksAdded(players));
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

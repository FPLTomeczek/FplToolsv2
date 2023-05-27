import React from "react";
import FirstEleven from "./FirstEleven";
import Bench from "./Bench";
import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";

const Pitch = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const picks = managerTeam.picks;
  return (
    <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div className="planner-picks">
        <FirstEleven picks={picks.slice(0, 11)} />
        <Bench picks={picks.slice(11, 15)} />
      </div>
      <Button variant="contained" size="medium">
        Submit
      </Button>
    </Box>
  );
};

export default Pitch;

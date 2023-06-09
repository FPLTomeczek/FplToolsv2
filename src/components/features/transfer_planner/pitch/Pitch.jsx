import React from "react";
import FirstEleven from "./FirstEleven";
import Bench from "./Bench";
import PitchHeader from "./PitchHeader";
import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";

const Pitch = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const picks = managerTeam.picks;
  return (
    <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <div className="planner-picks">
        <PitchHeader />
        <FirstEleven picks={picks.slice(0, 11)} />
        <Bench picks={picks.slice(11, 15)} />
      </div>
    </Box>
  );
};

export default Pitch;

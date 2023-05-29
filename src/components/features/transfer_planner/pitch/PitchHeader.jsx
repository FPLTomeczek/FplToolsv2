import React from "react";
import { useSelector } from "react-redux";
import { CURRENT_GW } from "../../../../constants";
import { Box, Typography, Button } from "@mui/material";

const PitchHeader = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const bank = managerTeam.bank;
  const transfers = managerTeam.transfers;
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }} mb={2}>
        <Button variant="contained" size="medium">
          Save Draft
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="h3">
          Gameweek: {CURRENT_GW + 1}
        </Typography>
        <Typography variant="h6" component="h3">
          Bank: {(bank / 10).toFixed(1)} £
        </Typography>
        <Typography variant="h6" component="h3">
          {" "}
          Transfers: {transfers}/2
        </Typography>
      </Box>
    </div>
  );
};

export default PitchHeader;

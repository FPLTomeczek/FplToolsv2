import React from "react";
import { useSelector } from "react-redux";
import { CURRENT_GW } from "../../../../constants";
import { Box, Typography } from "@mui/material";

const PitchHeader = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const bank = managerTeam.bank;
  const transfers = managerTeam.transfers;
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography>Gameweek {CURRENT_GW + 1}</Typography>
      <Typography>Bank: {(bank / 10).toFixed(1)}</Typography>
      <Typography>Transfers: {transfers}/2</Typography>
    </Box>
  );
};

export default PitchHeader;

import React from "react";
import { useSelector } from "react-redux";
import { CURRENT_GW } from "../../../../constants";

const PitchHeader = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const bank = managerTeam.bank;
  const transfers = managerTeam.transfers;
  return (
    <div>
      <p>Gameweek {CURRENT_GW + 1}</p>
      <p>Bank: {bank / 10}</p>
      <p>Transfers: {transfers}/2</p>
    </div>
  );
};

export default PitchHeader;

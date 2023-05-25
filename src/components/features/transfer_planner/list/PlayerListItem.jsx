import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector } from "react-redux";
import { teamsList } from "./data";

const PlayerListItem = ({ player }) => {
  const managerPicks = useSelector((state) => state.managerTeam.picks);

  let color = teamsList.find((team) => team.value === player.team).color;

  return (
    <div key={player.id} className="player-list-item">
      <div className="player-add-button-color">
        {managerPicks.find((pick) => pick.id === player.id) ? (
          <button style={{ display: "flex", alignItems: "center" }} disabled>
            <AddCircleIcon color="disabled" />
          </button>
        ) : (
          <button style={{ display: "flex", alignItems: "center" }}>
            <AddCircleIcon color="success" />
          </button>
        )}
        <div
          className="team-color"
          style={{
            background: Array.isArray(color)
              ? `linear-gradient(to right, ${color[0]} 0%, ${color[0]} 50%, ${color[1]} 50%, ${color[1]} 100%)`
              : color,
          }}
        ></div>
      </div>

      <p className="player-list-name">{player.web_name}</p>
      <p className="player-list-number" data-testid="player-team-item">
        {player.team}
      </p>
      <p className="player-list-number">{player.element_type}</p>
      <p className="player-list-number" data-testid="player-points-item">
        {player.total_points}
      </p>
      <p className="player-list-number" data-testid="player-price-item">
        {player.now_cost / 10}
      </p>
    </div>
  );
};

export default PlayerListItem;

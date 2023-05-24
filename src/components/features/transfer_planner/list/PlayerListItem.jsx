import React from "react";

const PlayerListItem = ({ player }) => {
  return (
    <div key={player.id} className="player-list-item">
      <i className="fa-solid fa-shirt"></i>
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

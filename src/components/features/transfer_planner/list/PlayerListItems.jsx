import React from "react";
import PlayerListItem from "./PlayerListItem";

const PlayerListItems = ({ pagesData, page }) => {
  return (
    <div className="player-list-items" data-testid="player-list-item">
      <div className="player-list-header">
        <i></i>
        <p className="player-list-name">Name</p>
        <p className="player-list-number">Team</p>
        <p className="player-list-number">Role</p>
        <p className="player-list-number">Pts</p>
        <p className="player-list-number">£</p>
      </div>
      {pagesData.length > 0
        ? pagesData[page - 1].map((player) => {
            const { id } = player;
            return <PlayerListItem player={player} key={id} />;
          })
        : null}
    </div>
  );
};

export default PlayerListItems;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import { paginate, handleSettingPages } from "./utils";
import PlayersListForm from "./PlayersListForm";
import PlayerListItem from "./PlayerListItem";
import ListButtons from "../../list/ListButtons";

const PlayersList = () => {
  const players = useSelector((state) => state.players.playersList);
  const status = useSelector((state) => state.players.status);
  const [page, setPage] = useState(1);
  const { pagesData, numOfPages } = paginate(players);

  function curryPages(callback, numOfPages) {
    return (type) => handleSettingPages(callback, type, numOfPages);
  }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  if (status === "idle") {
    return <p>Idle</p>;
  }

  return (
    <Wrapper>
      <Typography variant="h3">
        Page {page} / {numOfPages}
      </Typography>
      <PlayersListForm />
      <div className="player-list-header">
        <i></i>
        <p className="player-list-name">Name</p>
        <p className="player-list-number">Team</p>
        <p className="player-list-number">Role</p>
        <p className="player-list-number">Pts</p>
        <p className="player-list-number">£</p>
      </div>
      {players &&
        pagesData[page - 1].map((player) => {
          const { id } = player;
          return <PlayerListItem player={player} key={id} />;
        })}
      <ListButtons handleSettingPages={curryPages(setPage, numOfPages)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .player-list-item,
  .player-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .player-list-item {
    border-top: 1px solid gray;
  }
  .player-list-number {
    min-width: 10%;
  }
  .player-list-name {
    min-width: 50%;
  }
  .player-list-item > i,
  .player-list-header > i {
    min-width: 10%;
  }
  .switchPage {
    border-radius: 50%;
    box-shadow: 0px 5px 5px;
    cursor: pointer;
    padding: 0.5rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
  }
`;

export default PlayersList;

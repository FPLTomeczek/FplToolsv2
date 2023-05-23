import React, { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import { paginate, handleSettingPages } from "../utils";
import PlayersListForm from "./PlayersListForm";
import ListButtons from "./ListButtons";
import PlayerListItems from "./PlayerListItems";

function curryPages(callback, numOfPages) {
  return (type) => handleSettingPages(callback, type, numOfPages);
}

const PlayersList = () => {
  const players = useSelector((state) => state.players.playersList);
  const status = useSelector((state) => state.players.status);
  const filters = useSelector((state) => state.players.filterOptions);
  const [page, setPage] = useState(1);

  const { pagesData, numOfPages } = paginate(
    players
      .filter((player) => {
        if (filters.team === "ALL") {
          return player;
        }
        return player.team === filters.team;
      })
      .filter((player) => {
        if (filters.name === "") {
          return player;
        }
        return player.web_name
          .toLowerCase()
          .includes(filters.name.toLowerCase());
      })
  );

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
      <PlayerListItems pagesData={pagesData} page={page} />
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

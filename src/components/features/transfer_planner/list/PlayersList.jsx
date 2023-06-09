import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import {
  paginate,
  filterPlayers,
  handleSettingPages,
  sortPlayers,
} from "./utils";
import { sortPlayers as sortPlayersSlice } from "../../../../features/players/playersSlice";
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
  const sortOptions = useSelector((state) => state.players.sortOptions);

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { pagesData, numOfPages } = paginate(
    sortPlayers(filterPlayers(players, filters), sortOptions)
  );

  const handleSortChange = (sortOptions) => {
    dispatch(sortPlayersSlice({ ...sortOptions }));
  };

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
      <PlayersListForm
        setPage={setPage}
        page={page}
        numOfPages={numOfPages}
        handleSettingPages={curryPages(setPage, numOfPages)}
      />
      <PlayerListItems
        pagesData={pagesData}
        page={page}
        sortOptions={sortOptions}
        handleSortChange={handleSortChange}
      />
      <ListButtons handleSettingPages={curryPages(setPage, numOfPages)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 4rem;
  box-sizing: border-box;

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
  .player-add-button-color {
    display: flex;
    align-items: center;
    justify-content: space-around;

    min-width: 10%;
  }

  .player-list-number {
    display: flex;
    align-items: center;
  }
  #player-list-points,
  #player-list-price {
    cursor: pointer;
  }
  .switchPage {
    border-radius: 50%;
    border: 1px solid gray;
    cursor: pointer;
    padding: 0.5rem;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem 0;
  }
  .team-color {
    width: 20px;
    border-radius: 50%;
    background-color: black;
    height: 20px;
  }
`;

export default PlayersList;

import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const paginate = (list) => {
  const divider = 20;
  const numOfPages =
    list.length % divider === 0
      ? list.length / divider
      : list.length / divider + 1;

  const pagesData = [];

  for (let i = 0; i < numOfPages; i++) {
    pagesData.push(list.slice(i * divider, divider * (i + 1)));
  }

  return pagesData;
};

const PlayersList = () => {
  const players = useSelector((state) => state.players.playersList);
  const status = useSelector((state) => state.players.status);
  console.log(players);
  let page = 1;
  const pagesData = paginate(players);

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
          const { web_name, team, element_type, id, total_points, now_cost } =
            player;
          return (
            <div key={id} className="player-list-item">
              <i className="fa-solid fa-shirt"></i>
              <p className="player-list-name">{web_name}</p>
              <p className="player-list-number">{team}</p>
              <p className="player-list-number">{element_type}</p>
              <p className="player-list-number">{total_points}</p>
              <p className="player-list-number">{now_cost / 10}</p>
            </div>
          );
        })}
      <button className="switchPage">
        <i className="fa-solid fa-angles-left"></i>
      </button>
      <button className="switchPage">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="switchPage">
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      <button className="switchPage">
        <i className="fa-solid fa-angles-right"></i>
      </button>
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
`;

export default PlayersList;

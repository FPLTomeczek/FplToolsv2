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
  let page = 1;
  const pagesData = paginate(players);

  return (
    <Wrapper>
      {pagesData[page - 1].map((player) => {
        const { web_name, team, element_type, id } = player;
        return (
          <div key={id} className="player-list-item">
            <p>{web_name}</p>
            <p>{team}</p>
            <p>{element_type}</p>
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
  .player-list-item {
    display: flex;
  }
  .switchPage {
    border-radius: 50%;
    box-shadow: 0px 5px 5px;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export default PlayersList;

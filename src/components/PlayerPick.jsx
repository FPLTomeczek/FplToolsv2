import React from "react";
import { styled } from "styled-components";

const PlayerPick = ({ name }) => {
  return (
    <Wrapper>
      <div className="player-pick">
        <i className="fa-solid fa-shirt"></i>
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .player-pick {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .player-pick > i {
    font-size: 4rem;
  }
`;

export default PlayerPick;

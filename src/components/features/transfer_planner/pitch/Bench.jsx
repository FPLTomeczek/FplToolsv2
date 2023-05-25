import React from "react";
import { styled } from "styled-components";
import PlayerPick from "./PlayerPick";

const Bench = ({ picks }) => {
  return (
    <Wrapper>
      {picks.map((player) => {
        return <PlayerPick key={player.id} player={player} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
export default Bench;

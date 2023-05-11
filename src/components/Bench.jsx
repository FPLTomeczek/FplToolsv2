import React from "react";
import { styled } from "styled-components";
import PlayerPick from "./PlayerPick";

const Bench = ({ picks }) => {
  return (
    <Wrapper>
      {picks.map((player) => {
        console.log(player);
        return <PlayerPick key={player.id} name={player.web_name} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
export default Bench;
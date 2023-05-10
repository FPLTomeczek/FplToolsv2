import React from "react";
import PlayerPick from "./PlayerPick";
import { styled } from "styled-components";

const FirstEleven = ({ picks }) => {
  const picksByRole = picks.reduce((accumulator, value) => {
    console.log(value.element_type);
    if (accumulator[value.element_type - 1] === undefined) {
      accumulator[value.element_type - 1] = [value];
    } else {
      accumulator[value.element_type - 1] = [
        ...accumulator[value.element_type - 1],
        value,
      ];
    }
    console.log(accumulator);
    return accumulator;
  }, []);

  console.log(picksByRole);

  return (
    <Wrapper>
      {picksByRole.map((players, ind) => {
        console.log(players);
        return (
          <div key={ind} className="picks-row">
            {players.map((player) => {
              console.log(player);
              return <PlayerPick key={player.id} name={player.web_name} />;
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .picks-row {
    display: flex;
  }
`;

export default FirstEleven;

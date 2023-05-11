import React from "react";
import PlayerPick from "./PlayerPick";
import { styled } from "styled-components";

const FirstEleven = ({ picks }) => {
  const picksByRole = picks.reduce((accumulator, value) => {
    if (accumulator[value.element_type - 1] === undefined) {
      accumulator[value.element_type - 1] = [value];
    } else {
      accumulator[value.element_type - 1] = [
        ...accumulator[value.element_type - 1],
        value,
      ];
    }
    return accumulator;
  }, []);

  // <a href="https://www.vecteezy.com/free-vector/football-pitch">
  //   Football Pitch Vectors by Vecteezy
  // </a>;
  return (
    <Wrapper>
      <div className="pitch">
        {picksByRole.map((players, ind) => {
          return (
            <div key={ind} className="picks-row">
              {players.map((player) => {
                return <PlayerPick key={player.id} name={player.web_name} />;
              })}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  .pitch {
    background-image: url("src/assets/FOOTBALL_FIELD_portrait.jpg");
    width: 500px;
    height: 750px;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .picks-row {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export default FirstEleven;

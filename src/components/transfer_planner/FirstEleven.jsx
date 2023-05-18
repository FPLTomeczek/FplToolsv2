import React from "react";
import PlayerPick from "./PlayerPick";
import { styled } from "styled-components";

function roleToIndex(role) {
  switch (role) {
    case "GK":
      return 0;
    case "DEF":
      return 1;
    case "MID":
      return 2;
    case "FWD":
      return 3;
    default:
      break;
  }
}

const FirstEleven = ({ picks }) => {
  const picksByRole = picks.reduce((accumulator, value) => {
    const index = roleToIndex(value.element_type);
    if (accumulator[index] === undefined) {
      accumulator[index] = [value];
    } else {
      accumulator[index] = [...accumulator[index], value];
    }
    return accumulator;
  }, []);

  console.log(picksByRole);

  // for (const role in picksByRole) {
  //   console.log(picksByRole[role]);
  // }
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

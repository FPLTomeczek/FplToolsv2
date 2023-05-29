import React from "react";
import { styled } from "styled-components";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  removePick,
  retrievePick,
  makeChange,
} from "../../../../features/managerTeam/managerTeamSlice";

const PlayerPick = ({ player, index }) => {
  const {
    id,
    web_name: name,
    position,
    element_type,
    sellCost,
    now_cost: cost,
  } = player;

  const dispatch = useDispatch();

  const removePlayer = () => {
    dispatch(removePick({ id, position, element_type, sellCost, cost }));
  };

  const retrievePlayer = () => {
    dispatch(retrievePick(player.removedPickIndex));
  };

  const enableChange = () => {
    dispatch(makeChange(player.id));
  };

  return (
    <Wrapper>
      <div className="player-pick">
        <div className="buttons">
          <button onClick={enableChange}>
            <ChangeCircleIcon color="warning" />
          </button>
          {name !== "Blank" ? (
            <button onClick={removePlayer}>
              <CancelIcon color="error" />
            </button>
          ) : (
            <button onClick={retrievePlayer}>
              <ArrowCircleLeftRoundedIcon color="success" />
            </button>
          )}
        </div>
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
  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.25rem;
  }
  .buttons > * {
    cursor: pointer;
  }
  p {
    background-color: white;
    padding: 0.25rem;
  }
`;

export default PlayerPick;

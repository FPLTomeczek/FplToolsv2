import React from "react";
import { styled } from "styled-components";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { useDispatch } from "react-redux";
import {
  removePick,
  retrievePick,
} from "../../../../features/managerTeam/managerTeamSlice";

const PlayerPick = ({ player }) => {
  const { web_name: name, position: index, element_type } = player;

  const dispatch = useDispatch();

  const removePlayer = () => {
    dispatch(removePick({ index, element_type }));
  };

  const retrievePlayer = () => {
    dispatch(retrievePick(index));
  };

  return (
    <Wrapper>
      <div className="player-pick">
        <div className="buttons">
          <button>
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

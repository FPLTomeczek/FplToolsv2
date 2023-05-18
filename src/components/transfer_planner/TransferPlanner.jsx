import { useSelector } from "react-redux";
import FirstEleven from "./FirstEleven";
import Bench from "./Bench";
import { styled } from "styled-components";
import PlayerList from "./PlayersList";
import { Grid } from "@mui/material";

const TransferPlanner = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const picks = managerTeam.picks;

  return (
    <Wrapper>
      <Grid container mt={2}>
        <Grid
          item
          xs={12}
          lg={6}
          mt={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <div className="planner-picks">
            <FirstEleven picks={picks.slice(0, 11)} />
            <Bench picks={picks.slice(11, 15)} />
          </div>
        </Grid>

        <Grid item xs={12} lg={6}>
          <div className="player-list">
            <PlayerList />
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .planner-picks {
    max-width: 500px;
  }
`;

export default TransferPlanner;

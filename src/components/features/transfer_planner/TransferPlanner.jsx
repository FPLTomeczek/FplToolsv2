import { styled } from "styled-components";
import PlayerList from "./list/PlayersList";
import { Grid } from "@mui/material";
import Pitch from "./pitch/Pitch";

const TransferPlanner = () => {
  return (
    <Wrapper>
      <Grid container mt={2}>
        <Grid
          item
          xs={12}
          lg={6}
          mt={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pitch />
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

import { useSelector } from "react-redux";
import FirstEleven from "./FirstEleven";
import Bench from "./Bench";
import { styled } from "styled-components";

const TransferPlanner = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const picks = managerTeam.picks;

  return (
    <Wrapper>
      <div className="planner-content">
        <FirstEleven picks={picks.slice(0, 11)} />
        {/* {picks.map((pick) => {
        const { id, web_name } = pick;
        return <PlayerPick key={id} name={web_name} />;
      })} */}
        <Bench picks={picks.slice(11, 15)} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  .planner-content {
    max-width: 600px;
  }
`;

export default TransferPlanner;

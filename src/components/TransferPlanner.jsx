import { useSelector } from "react-redux";
import PlayerPick from "./PlayerPick";

const TransferPlanner = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  const picks = managerTeam.picks;

  return (
    <div>
      {picks.map((pick) => {
        const { id, web_name } = pick;
        return <PlayerPick key={id} name={web_name} />;
      })}
    </div>
  );
};

export default TransferPlanner;

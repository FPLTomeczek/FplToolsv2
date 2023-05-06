import { useSelector } from "react-redux";

const TransferPlanner = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  console.log(managerTeam);
  const picks = managerTeam.picks;

  return (
    <div>
      {picks.map((pick) => {
        const { element } = pick;
        return <p key={element}>{element}</p>;
      })}
    </div>
  );
};

export default TransferPlanner;

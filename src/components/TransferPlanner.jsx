import { useSelector } from "react-redux";

const TransferPlanner = () => {
  const managerTeam = useSelector((state) => state.managerTeam);
  console.log(managerTeam);
  const picks = managerTeam.picks;

  return (
    <div>
      {picks.map((pick) => {
        const { id, web_name } = pick;
        return <p key={id}>{`${id} ${web_name}`}</p>;
      })}
    </div>
  );
};

export default TransferPlanner;

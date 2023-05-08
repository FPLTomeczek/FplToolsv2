import { useState } from "react";
import { getManagerTeam } from "../customHooks";
import { useDispatch } from "react-redux";
import { picksAdded } from "../features/managerTeam/managerTeamSlice";
import TransferPlanner from "../components/TransferPlanner";

const MainPage = () => {
  const [userID, setUserID] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const { players } = await getManagerTeam(id);
    dispatch(picksAdded(players));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setUserID(e.target.value)}
          value={userID}
        />
        <button type="submit" onClick={(e) => handleSubmit(e, userID)}>
          Submit
        </button>
      </form>
      <TransferPlanner />
    </div>
  );
};

export default MainPage;

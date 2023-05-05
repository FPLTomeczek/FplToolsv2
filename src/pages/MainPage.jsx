import { useState } from "react";
import { getManagerTeam } from "../customHooks";
import TransferPlanner from "../components/TransferPlanner";

const MainPage = () => {
  const [userID, setUserID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { picks } = await getManagerTeam();
    console.log(picks);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setUserID(e.target.value)}
          value={userID}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
      <TransferPlanner />
    </div>
  );
};

export default MainPage;

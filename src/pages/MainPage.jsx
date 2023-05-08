import { useRef } from "react";
import { getManagerTeam } from "../customHooks";
import { useDispatch } from "react-redux";
import { picksAdded } from "../features/managerTeam/managerTeamSlice";
import TransferPlanner from "../components/TransferPlanner";

const MainPage = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const id = inputRef.current.value;
    e.preventDefault();
    const { players } = await getManagerTeam(id);
    dispatch(picksAdded(players));
  };

  return (
    <div>
      <form>
        <input
          type="text"
          ref={inputRef}
          // onChange={(e) => (inputRef.current.value = e.target.value)}
          // value={inputRef.current.value}
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

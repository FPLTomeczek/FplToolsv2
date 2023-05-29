import MainPage from "./pages/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchPlayers,
  fetchPlayersHistory,
} from "./features/players/playersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
    dispatch(fetchPlayersHistory());
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;

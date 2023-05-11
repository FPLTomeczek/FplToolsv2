import MainPage from "./pages/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPlayers } from "./features/players/playersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, []);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;

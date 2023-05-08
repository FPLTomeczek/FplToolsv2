import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getManagerTeam = async (id) => {
  const { data: teamInfo } = await axiosInstance.get("/team", {
    params: { userID: id },
  });
  const teamIDs = teamInfo.picks.map((pick) => pick.element);
  const { data: teamPicks } = await axiosInstance.get(
    `/players/getTeamManagerPlayers?ids=[${teamIDs.map((id) => id)}]`
  );
  return teamPicks;
};

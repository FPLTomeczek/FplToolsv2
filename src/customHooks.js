import {
  getPlayersPositions,
  getTeamPicks,
  assignPositionsToPlayers,
  axiosInstance,
} from "./utils";

export const getManagerTeam = async (id) => {
  const { data: teamInfo } = await axiosInstance.get("/team", {
    params: { userID: id },
  });
  const teamIDs = teamInfo.picks.map((pick) => pick.element);

  const playersPositions = getPlayersPositions(teamInfo);

  const teamPicks = await getTeamPicks(teamIDs);

  return assignPositionsToPlayers(playersPositions, teamPicks);
};

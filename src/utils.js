import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const assignPositionsToPlayers = (positionObjects, playerObjects) => {
  const ids = positionObjects.map((element) => {
    return element.element;
  });

  const players = playerObjects.map((player) => {
    return { ...player, position: ids.indexOf(player.id) };
  });
  return players;
};

export const getPlayersPositions = (teamData) => {
  const id_Position = teamData.picks.map((pick) => {
    const { position, element } = pick;
    return { position, element };
  });
  return id_Position;
};

export const getTeamPicks = async (teamIDs) => {
  const {
    data: { players: teamPicks },
  } = await axiosInstance.get(
    `/players/getTeamManagerPlayers?ids=[${teamIDs.map((id) => id)}]`
  );
  return teamPicks;
};

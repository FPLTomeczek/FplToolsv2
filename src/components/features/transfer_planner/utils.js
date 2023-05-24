import { axiosInstance } from "../../../utils";

export function roleToIndex(role) {
  switch (role) {
    case "GK":
      return 0;
    case "DEF":
      return 1;
    case "MID":
      return 2;
    case "FWD":
      return 3;
    default:
      break;
  }
}

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

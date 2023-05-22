import { axiosInstance } from "../../../utils";

export const paginate = (list) => {
  const divider = 20;
  const numOfPages =
    list.length % divider === 0
      ? list.length / divider
      : Math.ceil(list.length / divider);

  const pagesData = [];

  for (let i = 0; i < numOfPages; i++) {
    pagesData.push(list.slice(i * divider, divider * (i + 1)));
  }

  return { pagesData, numOfPages };
};

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

export const handleSettingPages = (callback, type, numOfPages) => {
  console.log(numOfPages);
  switch (type) {
    case "first":
      return callback(1);
    case "prev":
      return callback((prev) => {
        if (prev > 1) {
          return prev - 1;
        }
        return prev;
      });
    case "next":
      return callback((prev) => {
        if (prev < numOfPages) {
          return prev + 1;
        }
        return prev;
      });
    case "last":
      return callback(numOfPages);
    default:
      break;
  }
};
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

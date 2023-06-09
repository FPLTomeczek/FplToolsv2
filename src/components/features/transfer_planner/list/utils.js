export const filterPlayers = (players, filters) => {
  return players
    .filter((player) => {
      if (filters.team === "ALL") {
        return player;
      }
      return player.team === filters.team;
    })
    .filter((player) => {
      if (filters.name === "") {
        return player;
      }
      return player.web_name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]|/g, "")
        .replace(/\u0142/g, "l")
        .includes(
          filters.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]|/g, "")
            .replace(/\u0142/g, "l")
        );
    })
    .filter((player) => {
      if (filters.role === "ALL") {
        return player;
      }
      return player.element_type === filters.role;
    });
};

export const sortPlayers = (players, sortOptions) => {
  return players.sort((playerA, playerB) => {
    if (sortOptions.type === "points") {
      return sortOptions.value === "desc"
        ? playerB.total_points - playerA.total_points
        : playerA.total_points - playerB.total_points;
    } else if (sortOptions.type === "price") {
      return sortOptions.value === "desc"
        ? playerB.now_cost - playerA.now_cost
        : playerA.now_cost - playerB.now_cost;
    }
  });
};

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

export const handleSettingPages = (callback, type, numOfPages) => {
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

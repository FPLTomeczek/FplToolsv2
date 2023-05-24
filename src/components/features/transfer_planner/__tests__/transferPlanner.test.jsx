import { getManagerTeam } from "../customHooks";
import { it, expect, describe } from "vitest";
import store from "../../../../app/store";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import PlayersList from "../list/PlayersList";
import configureStore from "redux-mock-store";

describe("fetching players", () => {
  it("team players are fetched", async () => {
    const data = await getManagerTeam(7770);
    expect(data).toHaveLength(15);
  });
});

describe("list filtering", () => {
  const mockStore = configureStore();

  const players = [
    { id: 1, web_name: "Raya", team: "BRE" },
    { id: 2, web_name: "Trippier", team: "NEW" },
    { id: 3, web_name: "Estupiñán", team: "BHA" },
  ];

  const proxyHandler = {
    get(obj, prop) {
      return prop in obj ? obj[prop] : "";
    },
  };

  it("should return players from selected team", async () => {
    const store = mockStore({
      players: {
        playersList: [
          new Proxy(players[0], proxyHandler),
          new Proxy(players[1], proxyHandler),
          new Proxy(players[2], proxyHandler),
        ],
        status: "success",
        error: null,
        filterOptions: { name: "", team: "BRE", role: "" },
      },
    });

    render(
      <Provider store={store}>
        <PlayersList />
      </Provider>
    );

    const playerListItem = screen.getAllByTestId("player-team-item");

    expect(playerListItem.every((item) => item.textContent === "BRE")).toBe(
      true
    );
  });
});

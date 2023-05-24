import { getManagerTeam } from "../customHooks";
import { it, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import { renderComponent, proxyHandler } from "./utils";
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

  const mockPlayers = [
    { id: 1, web_name: "Raya", team: "BRE" },
    { id: 2, web_name: "Trippier", team: "NEW" },
    { id: 3, web_name: "Estupiñán", team: "BHA" },
  ];

  const initialState = {
    players: {
      playersList: [
        new Proxy(mockPlayers[0], proxyHandler),
        new Proxy(mockPlayers[1], proxyHandler),
        new Proxy(mockPlayers[2], proxyHandler),
      ],
      status: "success",
      error: null,
      filterOptions: { name: "", team: "BRE", role: "" },
    },
  };

  describe("team filtering", () => {
    it("should return players from selected team", () => {
      const store = mockStore(initialState);

      renderComponent(<PlayersList />, store);

      const playerListItem = screen.getAllByTestId("player-team-item");

      expect(playerListItem.every((item) => item.textContent === "BRE")).toBe(
        true
      );
    });

    it("should not return any player when player doesnt belong to team", () => {
      const { players } = initialState;

      const store = mockStore({
        ...initialState,
        players: {
          ...players,
          filterOptions: { name: "", team: "ARS", role: "" },
        },
      });

      renderComponent(<PlayersList />, store);

      expect(screen.queryAllByTestId("player-team-item")).toHaveLength(0);
    });
  });

  describe("name filtering", () => {
    it(`should return player that contains string "TRIP" `, () => {
      const { players } = initialState;

      const store = mockStore({
        ...initialState,
        players: {
          ...players,
          filterOptions: { name: "TRIP", team: "ALL", role: "" },
        },
      });

      renderComponent(<PlayersList />, store);

      expect(screen.queryAllByTestId("player-team-item")).toHaveLength(1);
      expect(screen.getByText(/trippier/i)).toBeInTheDocument();
    });

    it(`should not return player that contains string "RAYE" `, () => {
      const { players } = initialState;

      const store = mockStore({
        ...initialState,
        players: {
          ...players,
          filterOptions: { name: "RAYE", team: "ALL", role: "" },
        },
      });

      renderComponent(<PlayersList />, store);

      expect(screen.queryAllByTestId("player-team-item")).toHaveLength(0);
    });
  });
});

import { getManagerTeam } from "../customHooks";
import { it, expect, describe } from "vitest";
import store from "../../../../app/store";
import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";

import PlayersList from "../list/PlayersList";
import configureStore from "redux-mock-store";

it("team players are fetched", async () => {
  const data = await getManagerTeam(7770);
  expect(data).toHaveLength(15);
});

describe("list filtering", () => {
  const mockStore = configureStore();
  it("should return players from selected team", async () => {
    const store = mockStore({
      players: {
        playersList: [
          {
            _id: "6464be106deb8d3ee8afad07",
            id: 81,
            web_name: "Raya",
            goals: 0,
            assists: 0,
            team: "BRE",
            element_type: "GK",
            total_points: 156,
            now_cost: 48,
            __v: 0,
            position: 0,
          },
          {
            _id: "6464be106deb8d3ee8afaeac",
            id: 357,
            web_name: "Trippier",
            goals: 0,
            assists: 7,
            team: "NEW",
            element_type: "DEF",
            total_points: 179,
            now_cost: 61,
            __v: 0,
            position: 1,
          },
          {
            _id: "6464be106deb8d3ee8afad44",
            id: 586,
            web_name: "Estupiñán",
            goals: 0,
            assists: 7,
            team: "BHA",
            element_type: "DEF",
            total_points: 123,
            now_cost: 49,
            __v: 0,
            position: 2,
          },
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

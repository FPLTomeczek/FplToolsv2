import { getManagerTeam } from "../customHooks";
import { it, expect, describe } from "vitest";
import store from "../../../../app/store";
import { render, screen, fireEvent, within } from "@testing-library/react";

import { Provider } from "react-redux";

import App from "../../../../App";

it("team players are fetched", async () => {
  const data = await getManagerTeam(7770);
  expect(data).toHaveLength(15);
});

describe("list filtering", () => {
  it("should return players from selected team", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = await screen.findByTestId("select-button");
    screen.debug(button.firstChild);
    fireEvent.mouseDown(button.firstChild);

    const listbox = within(screen.getByRole("listbox"));
    fireEvent.click(listbox.getByText(/bre/i));

    const playerListItem = screen.getAllByTestId("player-team-item");

    expect(playerListItem.every((item) => item.textContent === "BRE")).toBe(
      true
    );
  });
});

// test list navigation

import { getManagerTeam } from "../customHooks";
import { test, expect, describe } from "vitest";

test("team players are fetched", async () => {
  const data = await getManagerTeam(7770);
  expect(data).toHaveLength(15);
});

describe("list filtering", () => {
  it("should return players from selected team", () => {
    expect();
  });
});

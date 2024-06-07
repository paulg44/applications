import { screen, render } from "@testing-library/react";
import Stats from "./Stats";

test("counter increments", () => {
  render(<Stats />);

  const statsHeader = screen.getAllByRole("columnheader");

  expect(statsHeader).toHaveLength(3);
});

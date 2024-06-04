import { screen, render } from "@testing-library/react";
import TableOfEntries from "./TableOfEntries";

test("a table renders with 3 columns", () => {
  render(<TableOfEntries />);

  const table = screen.getByRole("table");
  const columns = screen.getAllByRole("columnheader");

  expect(table).toBeInTheDocument();
  expect(columns).toHaveLength(3);
});

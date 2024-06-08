import { render, screen } from "@testing-library/react";
import App from "./App";

test("total companies renders", async () => {
  render(<App />);

  const total = screen.getByRole("heading", { name: /total companies/i });

  expect(total).toBeInTheDocument();
});

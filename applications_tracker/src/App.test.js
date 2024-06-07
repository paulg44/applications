import { render, screen } from "@testing-library/react";
import App from "./App";

test("adds a compnay to table on submit", async () => {
  const mock = jest.fn();
  render(<App />);

  const companyInput = screen.getByRole("textbox");
});

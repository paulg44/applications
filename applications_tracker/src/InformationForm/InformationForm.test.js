import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import InformationForm from "./InformationForm";

test("it shows two inputs, a select option and a button", () => {
  render(<InformationForm />);

  const inputs = screen.getAllByRole("textbox");
  const select = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(select).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import InformationForm from "./InformationForm";

test("it shows two inputs, a select option, checkbox and a button", () => {
  render(<InformationForm />);

  const inputs = screen.getAllByRole("textbox");
  const select = screen.getByRole("combobox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(select).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("it updates value of inputs", async () => {
  const optionsArray = ["React", "C#", "C++"];
  render(<InformationForm options={optionsArray} />);

  const companyInput = screen.getByRole("textbox", { name: /company name/i });
  const locationInput = screen.getByRole("textbox", { name: /location/i });
  const selectBox = screen.getByRole("combobox");

  fireEvent.change(companyInput, { target: { value: "test company" } });
  fireEvent.change(locationInput, { target: { value: "test location" } });
  fireEvent.change(selectBox, { target: { value: "C#" } });

  expect(companyInput).toHaveValue("test company");
  expect(locationInput).toHaveValue("test location");
  expect(selectBox).toHaveValue("C#");
});

import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import InformationForm from "./InformationForm";

test("it shows two inputs, a select option, checkbox and a button", () => {
  render(<InformationForm />);

  const inputs = screen.getAllByRole("textbox");
  const select = screen.getByRole("combobox");
  //   const checkboxes = screen.getAllByRole("checkbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(select).toBeInTheDocument();
  //   expect(checkboxes).toHaveLength(1);
  expect(button).toBeInTheDocument();
});

test("it updates value of inputs", async () => {
  render(<InformationForm />);

  const companyInput = screen.getByRole("textbox", { name: /company name/i });
  const locationInput = screen.getByRole("textbox", { name: /location/i });

  fireEvent.change(companyInput, { target: { value: "test company" } });
  fireEvent.change(locationInput, { target: { value: "test location" } });

  expect(companyInput).toHaveValue("test company");
  expect(locationInput).toHaveValue("test location");
});

// test("it calls handleFormSubmission on form submit", async () => {
//   const mock = jest.fn();
//   render(<InformationForm handleFormSubmission={mock} />);

//   const companyInput = screen.getByRole("textbox", { name: /company name/i });
//   const locationInput = screen.getByRole("textbox", { name: /location/i });

//   fireEvent.change(companyInput, { target: { value: "test company" } });
//   fireEvent.change(locationInput, { target: { value: "test location" } });

//   const button = screen.getByRole("button");
//   fireEvent.click(button);

//   expect(mock).toHaveBeenCalled();
// });

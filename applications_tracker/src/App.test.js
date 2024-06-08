import { render } from "@testing-library/react";
import App from "./App";

test("everything renders in app", async () => {
  const mock = jest.fn();
  render(<App />);
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName from "./PlanetName";

test("renders form element", () => {
  render(<PlanetName onChangeTextinput={() => {}} />);
  expect(screen.getByLabelText("Planet Name:")).toBeInTheDocument();
});

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onChangeHandler = jest.fn();
    render(<PlanetName onChangeTextinput={onChangeHandler} />);

    userEvent.type(screen.getByRole("textbox"), "testing Planet Name");
    expect(screen.getByRole("textbox")).toHaveValue("testing Planet Name");
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

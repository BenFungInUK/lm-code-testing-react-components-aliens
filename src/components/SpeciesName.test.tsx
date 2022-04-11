import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpeciesName from "./SpeciesName";

test("renders form element", () => {
  render(<SpeciesName onChangeTextinput={() => {}} />);
  expect(screen.getByLabelText("Species Name:")).toBeInTheDocument();
});

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onChangeHandler = jest.fn();
    render(<SpeciesName onChangeTextinput={onChangeHandler} />);

    userEvent.type(screen.getByRole("textbox"), "testing Species Name");
    expect(screen.getByRole("textbox")).toHaveValue("testing Species Name");
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

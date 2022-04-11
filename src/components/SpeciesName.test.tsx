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

  //expect patternMismatch is true/false
  test.each([
    ["a", true],
    ["ab", true],
    ["abc", false],
    ["abc1", true],
    ["abc!", true],
    ["123456789012345678901234", true],
  ])(
    "Given the input text is (%s), Then the error message should (not) be prompted correctly",
    (inputText, expected) => {
      render(<SpeciesName onChangeTextinput={() => {}} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      userEvent.type(input, inputText);
      expect(input.validity.patternMismatch).toBe(expected);
    }
  );

  test("Given the input text is empty, Then the error message should be prompted correctly", () => {
    render(<SpeciesName onChangeTextinput={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "");
    expect(input.validity.valueMissing).toBeTruthy();
  });
});

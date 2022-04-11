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

  //expect patternMismatch is true/false
  test.each([
    ["a", true],
    ["a!", true],
    ["abc123", false],
    ["123456789012345678901234567890123456789012345678901", true],
  ])(
    "Given the input text is (%s), Then the error message should (not) be prompted correctly",
    (inputText, expected) => {
      render(<PlanetName onChangeTextinput={() => {}} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      userEvent.type(input, inputText);
      expect(input.validity.patternMismatch).toBe(expected);
    }
  );

  test("Given the input text is empty, Then the error message should be prompted correctly", () => {
    render(<PlanetName onChangeTextinput={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "");
    expect(input.validity.valueMissing).toBeTruthy();
  });
});

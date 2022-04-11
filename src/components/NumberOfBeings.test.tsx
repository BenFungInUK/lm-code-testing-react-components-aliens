import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfBeings from "./NumberOfBeings";

test("renders form element", () => {
  render(<NumberOfBeings onChangeTextinput={() => {}} />);
  expect(screen.getByLabelText("Number of beings:")).toBeInTheDocument();
});

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onChangeHandler = jest.fn();
    render(<NumberOfBeings onChangeTextinput={onChangeHandler} />);

    userEvent.type(screen.getByRole("textbox"), "testing number of beings");
    expect(screen.getByRole("textbox")).toHaveValue("testing number of beings");
    expect(onChangeHandler).toHaveBeenCalled();
  });

  //expect patternMismatch is true/false
  test.each([
    ["0", true],
    ["1", true],
    ["10", true],
    ["0000000001", true],
    ["1000000000", false],
  ])(
    "Given the input text is (%s), Then the error message should (not) be prompted correctly",
    (inputText, expected) => {
      render(<NumberOfBeings onChangeTextinput={() => {}} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      userEvent.type(input, inputText);
      expect(input.validity.patternMismatch).toBe(expected);
    }
  );

  test("Given the input text is empty, Then the error message should be prompted correctly", () => {
    render(<NumberOfBeings onChangeTextinput={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "");
    expect(input.validity.valueMissing).toBeTruthy();
  });
});

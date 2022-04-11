import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReasonOfSparing from "./ReasonOfSparing";

test("renders form element", () => {
  render(<ReasonOfSparing onChangeTextarea={() => {}} />);
  expect(screen.getByLabelText("Reason of sparing:")).toBeInTheDocument();
});

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onChangeHandler = jest.fn();
    render(<ReasonOfSparing onChangeTextarea={onChangeHandler} />);

    userEvent.type(screen.getByRole("textbox"), "testing Reason of sparing");
    expect(screen.getByRole("textbox")).toHaveValue(
      "testing Reason of sparing"
    );
    expect(onChangeHandler).toHaveBeenCalled();
  });

  //expect not valid is true/false
  test.each([
    ["1", true],
    ["123", true],
    ["1234567890123456", true],
    ["1234567890123456a", false],
    ["1234567890123456a!@#$", false],
  ])(
    "Given the input text is (%s), Then the error message should (not) be prompted correctly",
    (inputText, expected) => {
      render(<ReasonOfSparing onChangeTextarea={() => {}} />);
      const input = screen.getByRole("textbox") as HTMLInputElement;
      userEvent.type(input, inputText);
      expect(!input.validity.valid).toBe(expected);
    }
  );

  test("Given the input text is empty, Then the error message should be prompted correctly", () => {
    render(<ReasonOfSparing onChangeTextarea={() => {}} />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "");
    expect(input.validity.valueMissing).toBeTruthy();
  });
});

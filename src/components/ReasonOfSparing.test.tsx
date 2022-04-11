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
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MathQuestion from "./MathQuestion";

test("renders form element", () => {
  render(<MathQuestion onChangeSelection={() => {}} />);
  expect(screen.getByLabelText("What is 2+2?")).toBeInTheDocument();
});

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onChangeHandler = jest.fn();
    render(<MathQuestion onChangeSelection={onChangeHandler} />);

    userEvent.selectOptions(screen.getByRole("combobox"), "Not 4");
    expect(screen.getByRole("combobox")).toHaveValue("Not 4");
    expect(onChangeHandler).toHaveBeenCalled();
  });
});

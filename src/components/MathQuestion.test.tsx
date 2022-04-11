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

  test("is error message prompted correctly", () => {
    render(<MathQuestion onChangeSelection={() => {}} />);
    userEvent.selectOptions(screen.getByRole("combobox"), "Not 4");
    const input = screen.getByRole("combobox") as HTMLSelectElement;
    //expect not valid is true
    expect(!input.validity.valid).toBeTruthy();
  });
});

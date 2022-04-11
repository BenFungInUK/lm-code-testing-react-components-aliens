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
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import W12MFormContent from "./W12MFormContent";

describe("validate the function call", () => {
  test("is passed correctly", () => {
    const onSubmitHandler = jest.fn();
    render(<W12MFormContent onSubmit={onSubmitHandler} />);

    userEvent.click(screen.getByRole("button"));
    expect(onSubmitHandler).toHaveBeenCalled();
  });
});

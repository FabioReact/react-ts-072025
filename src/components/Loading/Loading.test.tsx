import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading Component", () => {
  it("should return a Loading text when isLoading is true", () => {
    render(<Loading isLoading={true} />);
    const loading = screen.getByRole("status");
    expect(loading).toBeInTheDocument();
  });

  it("should return children when isLoading is false", () => {
    render(<Loading isLoading={false}>Hello</Loading>);
    const children = screen.getByText("Hello");
    const spinner = screen.queryByRole("status");
    expect(spinner).not.toBeInTheDocument();
    expect(children).toBeInTheDocument();
  });
});

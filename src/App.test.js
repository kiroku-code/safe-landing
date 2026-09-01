import { render, screen } from "@testing-library/react";
import App from "./App";

test("offers both SAFE workflows", () => {
  render(<App />);
  expect(screen.getByText(/SAFE Diploma Assessment Form/i)).toBeInTheDocument();
  expect(screen.getByText(/Go SAFE Assessment Form/i)).toBeInTheDocument();
});

/** Shape, not the exact code, so splitting into per-workflow codes won't fail this. */
test("every workflow links to sign-up carrying a delegate code", () => {
  render(<App />);
  const links = screen
    .getAllByRole("link")
    .filter((a) => a.getAttribute("href")?.includes("/sign-up"));

  expect(links).toHaveLength(2);
  links.forEach((a) => {
    expect(a.getAttribute("href")).toMatch(
      /^https:\/\/editor\.trykiroku\.com\/sign-up\?code=.+/,
    );
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noreferrer");
  });
});

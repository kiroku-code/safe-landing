import { render, screen } from "@testing-library/react";
import App from "./App";

test("leads with the free template and the delegate discounts", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: "SAFE Assessment Form" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Diploma version")).toBeInTheDocument();
  expect(
    screen.getByText(/10% off Kiroku Essential, or 30% off Kiroku Pro/i),
  ).toBeInTheDocument();
});

/** Shape, not the exact code, so changing the code later won't fail this. */
test("every call to action links to sign-up carrying a delegate code", () => {
  render(<App />);
  const links = screen
    .getAllByRole("link")
    .filter((a) => a.getAttribute("href")?.includes("/sign-up"));

  expect(links.length).toBeGreaterThan(0);
  links.forEach((a) => {
    expect(a.getAttribute("href")).toMatch(
      /^https:\/\/editor\.trykiroku\.com\/sign-up\?code=.+/,
    );
    expect(a).toHaveAttribute("target", "_blank");
    expect(a).toHaveAttribute("rel", "noreferrer");
  });
});

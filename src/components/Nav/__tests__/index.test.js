import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import Nav from "..";
import React from "react";

afterEach(cleanup);

describe("Nav component", () => {
  it("render", () => {
    render(<Nav />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});

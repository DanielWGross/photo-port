import "@testing-library/jest-dom/extend-expect";

import { cleanup, render } from "@testing-library/react";

import About from "..";
import React from "react";

afterEach(cleanup);

describe("About component", () => {
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});

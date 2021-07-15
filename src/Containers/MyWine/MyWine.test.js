import React from "react";
import { render } from "@testing-library/react";
import MyWine from "./MyWine";

describe("MyWine tests", () => {
  it("should render", () => {
    expect(render(<MyWine />)).toBeTruthy();
  });
});

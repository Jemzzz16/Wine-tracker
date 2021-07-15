import React from "react";
import { render } from "@testing-library/react";
import RecordWine from "./RecordWine";

describe("RecordWine tests", () => {
  it("should render", () => {
    expect(render(<RecordWine />)).toBeTruthy();
  });
});

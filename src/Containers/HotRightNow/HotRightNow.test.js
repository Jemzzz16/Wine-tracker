import React from "react";
import { render } from "@testing-library/react";
import HotRightNow from "./HotRightNow";

describe("HotRightNow tests", () => {
  it("should render", () => {
    expect(render(<HotRightNow />)).toBeTruthy();
  });
});

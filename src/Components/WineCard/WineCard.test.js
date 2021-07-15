import React from "react";
import { render } from "@testing-library/react";
import WineCard from "./WineCard";

describe("WineCard tests", () => {
  it("should render", () => {
    expect(render(<WineCard />)).toBeTruthy();
  });
});

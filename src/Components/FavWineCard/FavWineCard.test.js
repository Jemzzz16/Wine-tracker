import React from "react";
import { render } from "@testing-library/react";
import FavWineCard from "./FavWineCard";

describe("FavWineCard tests", () => {
  it("should render", () => {
    expect(render(<FavWineCard />)).toBeTruthy();
  });
});

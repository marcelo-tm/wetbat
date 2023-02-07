import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { Navigation } from "../Navigation";

describe("Navigation", () => {
  afterEach(cleanup);

  it("renders the navigation correctly", () => {
    const menus = [
      [
        { icon: "icon1", label: "Label 1", to: "/label-1" },
        { label: "Label 2", to: "/label-2" },
      ],
      [{ label: "Label 3", to: "/label-3" }],
    ];
    render(<Navigation menus={menus} />, { wrapper: MemoryRouter });

    // Test the first link in the first section
    const firstLink = screen.getByText("Label 1");
    expect(firstLink).toHaveAttribute("href", "/label-1");
    // expect(screen.getByRole("img", { name: "icon1" })).toBeInTheDocument();

    // Test the second link in the first section
    const secondLink = screen.getByText("Label 2");
    expect(secondLink).toHaveAttribute("href", "/label-2");

    // Test the link in the second section
    const thirdLink = screen.getByText("Label 3");
    expect(thirdLink).toHaveAttribute("href", "/label-3");

    // Test the separators
    const separators = screen.getAllByRole("separator");
    expect(separators).toHaveLength(2);
  });
});

import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentsRender";
import { Sidenar } from "./Sidenar";

describe("Sidebar", () => {
    test("Test render", () => {
        componentRender(<Sidenar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Test toggle", () => {
        componentRender(<Sidenar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});

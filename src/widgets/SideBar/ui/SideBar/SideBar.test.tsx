import { fireEvent, screen } from "@testing-library/react";
import { SideBar } from "widgets/SideBar";
import { componentRender } from "shared/lib/tests/componentRender/componentsRender";

describe("SideBar", () => {
    test("Test render", () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Test toggle", () => {
        componentRender(<SideBar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});

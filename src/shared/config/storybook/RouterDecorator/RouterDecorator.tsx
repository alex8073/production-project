import { Story, StoryContext } from "@storybook/react";
// eslint-disable-next-line path-checker-fsd-stable/layer-imports
import "@/app/styles/index.scss";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

export const RouterDecorator = (
    StoryComponent: Story,
    { parameters: { router } }: StoryContext,
) => {
    if (!router) {
        return (
            <BrowserRouter>
                <StoryComponent />
            </BrowserRouter>
        );
    }
    const { path, route } = router;
    return (
        <MemoryRouter initialEntries={[encodeURI(route)]}>
            <Routes>
                <Route path={path} element={<StoryComponent />} />
            </Routes>
        </MemoryRouter>
    );
};

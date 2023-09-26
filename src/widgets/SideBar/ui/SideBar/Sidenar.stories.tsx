import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidenar } from "./Sidenar";

export default {
    title: "widgets/Sidebar",
    component: Sidenar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Sidenar>;

const Template: ComponentStory<typeof Sidenar> = (args) => <Sidenar {...args} />;

export const LightWithAuth = Template.bind({});
LightWithAuth.args = {};
LightWithAuth.decorators = [StoreDecorator({
    user: { authData: { id: "2", username: "name" } },
})];

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};
LightNoAuth.decorators = [StoreDecorator({})];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.args = {};
DarkWithAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: { authData: { id: "2", username: "name" } },
})];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {};
DarkNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { SideBar } from "./SideBar";

export default {
    title: "widgets/SideBar",
    component: SideBar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

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

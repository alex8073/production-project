import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);

export const LightWithAuth = Template.bind({});
LightWithAuth.args = {};
LightWithAuth.decorators = [
    StoreDecorator({
        user: { authData: { id: "2", username: "name" } },
    }),
];

export const LightNoAuth = Template.bind({});
LightNoAuth.args = {};
LightNoAuth.decorators = [StoreDecorator({})];

export const DarkWithAuth = Template.bind({});
DarkWithAuth.args = {};
DarkWithAuth.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: { id: "2", username: "name" } },
    }),
];

export const DarkNoAuth = Template.bind({});
DarkNoAuth.args = {};
DarkNoAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { Skeleton } from "./Skeleton";

export default {
    title: "shared/Skeleton",
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
    width: "100%",
    height: 100,
};

export const Circle = Template.bind({});
Circle.args = {
    border: "50%",
    width: 100,
    height: 100,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    width: "100%",
    height: 100,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: "50%",
    width: 100,
    height: 100,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DefaultBlue = Template.bind({});
DefaultBlue.args = {
    width: "100%",
    height: 100,
};
DefaultBlue.decorators = [ThemeDecorator(Theme.BLUE)];

export const CircleBlue = Template.bind({});
CircleBlue.args = {
    border: "50%",
    width: 100,
    height: 100,
};
CircleBlue.decorators = [ThemeDecorator(Theme.BLUE)];

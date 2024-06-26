import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { Text, TextSize, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Title",
    text: "Text",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: "Title",
    text: "Text",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: "Title",
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: "Title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: "Text",
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: "Text",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: "Title",
    text: "Text",
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: "Title",
    text: "Text",
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: "Title",
    text: "Text",
    size: TextSize.S,
};

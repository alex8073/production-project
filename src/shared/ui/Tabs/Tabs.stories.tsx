import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs";

export default {
    title: "shared/Tabs",
    component: Tabs,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabs: [
        {
            value: "1st tab",
            content: "1st tab",
        },
        {
            value: "2nd tab",
            content: "2nd tab",
        },
        {
            value: "3rd tab",
            content: "3rd tab",
        },
    ],
    value: "2nd tab",
    onTabClick: action("onTabClick"),
};

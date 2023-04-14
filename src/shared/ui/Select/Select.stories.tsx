import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
    title: "shared/Select",
    component: Select,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Label",
    options: [
        {
            value: "value 1",
            content: "value 1",
        },
        {
            value: "value 2",
            content: "value 2",
        },
        {
            value: "value 3",
            content: "value 3",
        },
    ],
};

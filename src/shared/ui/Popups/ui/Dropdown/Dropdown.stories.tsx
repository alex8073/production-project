import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../../Button/Button";
import { Dropdown } from "./Dropdown";

export default {
    title: "shared/Popups/Dropdown",
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            content: "frst",
        },
        {
            content: "scnd",
        },
        {
            content: "thrd",
        },
    ],
};

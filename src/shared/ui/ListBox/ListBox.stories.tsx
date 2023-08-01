import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ListBox } from "./ListBox";

export default {
    title: "shared/ListBox",
    component: ListBox,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        (Story) => <div style={{ padding: "100px" }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: "topLeft",
    value: "TopLeft",
    items: [
        {
            content: "dasdasd", value: "123",
        },
        {
            content: "dassdfsdfhdasd", value: "456",
        },
    ],
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: "topRight",
    value: "TopRight",
    items: [
        {
            content: "dasdasd", value: "123",
        },
        {
            content: "dassdfsdfhdasd", value: "456",
        },
    ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: "bottomLeft",
    value: "BottomLeft",
    items: [
        {
            content: "dasdasd", value: "123",
        },
        {
            content: "dassdfsdfhdasd", value: "456",
        },
    ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: "bottomRight",
    value: "BottomRight",
    items: [
        {
            content: "dasdasd", value: "123",
        },
        {
            content: "dassdfsdfhdasd", value: "456",
        },
    ],
};

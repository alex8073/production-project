import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AvatarImage from "shared/assets/tests/picture.jpg";
import { Avatar } from "./Avatar";

export default {
    title: "shared/Avatar",
    component: Avatar,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: AvatarImage,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImage,
    size: 50,
};

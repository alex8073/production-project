import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { AvatarDropdown } from "./AvatarDropdown";

export default {
    title: "shared/AvatarDropdown",
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [
        (Story) => <div style={{ padding: "100px" }}><Story /></div>,
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Default = Template.bind({});
Default.decorators = [StoreDecorator({ user: { authData: {} } })];

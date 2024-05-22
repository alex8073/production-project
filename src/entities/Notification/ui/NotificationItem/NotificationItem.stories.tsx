import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

export default {
    title: "entities/Notification/NotificationItem",
    component: NotificationItem,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    item: {
        id: "1",
        title: "Уведомление 1",
        description: "Произошло какое-то событие",
        userId: "1",
    },
};

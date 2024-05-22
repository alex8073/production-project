import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { INotification } from "../../model/types/notifications";
import { NotificationList } from "./NotificationList";

export default {
    title: "entities/Notification/NotificationList",
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

const notification: INotification = {
    id: "1",
    title: "Уведомление 1",
    description: "Произошло какое-то событие",
    userId: "1",
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: "GET",
            status: 200,
            response: [
                { ...notification, id: "1" },
                { ...notification, id: "2" },
                {
                    ...notification,
                    id: "3",
                    href: "http://localhost:3000/admin",
                },
            ],
        },
    ],
};

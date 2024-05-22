import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommentCard } from "./CommentCard";

export default {
    title: "entities/Comment/CommentCard",
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    comment: {
        text: "Some comment text",
        id: "1",
        user: {
            id: "1",
            username: "User",
            avatar: "https://webmg.ru/wp-content/uploads/2022/11/i-76-44.jpeg",
        },
    },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

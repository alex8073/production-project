import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CommentList } from "./CommentList";

export default {
    title: "entities/Comment/CommentList",
    component: CommentList,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    comments: [
        {
            id: "1",
            user: {
                id: "1",
                avatar: "",
                username: "Dima",
            },
            text: "test comment",
        },
        {
            id: "2",
            user: {
                id: "2",
                avatar: "",
                username: "Sasha",
            },
            text: "test comment",
        },
    ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
    comments: [],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

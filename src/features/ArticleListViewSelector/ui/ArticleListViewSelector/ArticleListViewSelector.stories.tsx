import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleListViewSelector } from "./ArticleListViewSelector";

export default {
    title: "features/ArticleListViewSelector",
    component: ArticleListViewSelector,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleListViewSelector>;

const Template: ComponentStory<typeof ArticleListViewSelector> = (args) => (
    <ArticleListViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

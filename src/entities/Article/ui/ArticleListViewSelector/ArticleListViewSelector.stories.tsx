import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleListViewSelector } from "./ArticleListViewSelector";

export default {
    title: "shared/ArticleListViewSelector",
    component: ArticleListViewSelector,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleListViewSelector>;

const Template: ComponentStory<typeof ArticleListViewSelector> = (args) => <ArticleListViewSelector {...args} />;

export const Default = Template.bind({});
Default.args = {};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ArticleDetailsPage from "./ArticleDetailsPage";

export default {
    title: "pages/ArticleDetailsPage",
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {};

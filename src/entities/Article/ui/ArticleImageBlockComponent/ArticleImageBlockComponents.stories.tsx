import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArticleImageBlockComponents } from "./ArticleImageBlockComponents";

export default {
    title: "shared/ArticleImageBlockComponents",
    component: ArticleImageBlockComponents,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ArticleImageBlockComponents>;

const Template: ComponentStory<typeof ArticleImageBlockComponents> = (args) => <ArticleImageBlockComponents {...args} />;

export const Default = Template.bind({});
Default.args = {};

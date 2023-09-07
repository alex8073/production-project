import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ArticleListView, IArticle } from "entities/Article";
import withMock from "storybook-addon-mock";
import ArticlesPage from "./ArticlesPage";

export default {
    title: "pages/ArticlesPage/ArticlesPage",
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const article: IArticle = {
    id: "1",
    img: "",
    createdAt: "",
    views: 123,
    user: {
        id: "1",
        username: "dsfdfs",
    },
    blocks: [],
    type: [],
    title: "asdasd",
    subtitle: "xcbcvb",
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({
    articlesPage: {
        view: ArticleListView.TILE,
    },
})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: "GET",
            status: 200,
            response: [
                { ...article, id: "1" },
                { ...article, id: "2" },
                { ...article, id: "3" },
            ],
        },
    ],
};

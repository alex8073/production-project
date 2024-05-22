import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecrator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
    parameters: {
        router: {
            path: "/profile/:id",
            route: "/profile/1",
        },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const LightDefault = Template.bind({});
LightDefault.args = {};
LightDefault.decorators = [
    StoreDecorator({
        profile: {
            form: {
                firstName: "John",
                lastName: "Miller",
                username: "Godzilla",
                country: Country.RUSSIA,
                age: 745,
                currency: Currency.RUB,
                city: "Moscow",
                avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
            },
            isLoading: false,
            readOnly: true,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                firstName: "John",
                lastName: "Miller",
                username: "Godzilla",
                country: Country.RUSSIA,
                age: 745,
                currency: Currency.RUB,
                city: "Moscow",
                avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
            },
            isLoading: false,
            readOnly: true,
        },
    }),
];

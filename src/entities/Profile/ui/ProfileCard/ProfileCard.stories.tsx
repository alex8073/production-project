import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { ProfileCard } from "./ProfileCard";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    data: {
        firstName: "John",
        lastName: "Miller",
        username: "Godzilla",
        country: Country.RUSSIA,
        age: 745,
        currency: Currency.RUB,
        city: "Moscow",
        avatar: "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
    },
};

export const Error = Template.bind({});
Error.args = {
    error: "error",
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

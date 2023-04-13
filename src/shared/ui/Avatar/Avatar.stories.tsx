import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImage from './picture.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImage,
};

export const Small = Template.bind({});
Small.args = {
    src: AvatarImage,
    size: 50,
};

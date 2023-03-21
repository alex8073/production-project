import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecrator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ThemePrimary = Template.bind({});
ThemePrimary.args = {
    children: 'Text',
};

export const ThemeClear = Template.bind({});
ThemeClear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const ThemeClearInverted = Template.bind({});
ThemeClearInverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const ThemeOutline = Template.bind({});
ThemeOutline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const ThemeOutlineSizeL = Template.bind({});
ThemeOutlineSizeL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const ThemeOutlineSizeXL = Template.bind({});
ThemeOutlineSizeXL.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const ThemeOutlineDark = Template.bind({});
ThemeOutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
ThemeOutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThemeBackground = Template.bind({});
ThemeBackground.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const ThemeBackgroundInverted = Template.bind({});
ThemeBackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const ButtonSizeM = Template.bind({});
ButtonSizeM.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const ButtonSizeL = Template.bind({});
ButtonSizeL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const ButtonSizeXL = Template.bind({});
ButtonSizeXL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
    children: 'Text',
    disabled: true,
};

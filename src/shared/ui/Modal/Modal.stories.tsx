import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecrator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + 'A, animi aspernatur assumenda cum eligendi esse hic incidunt\n'
        + 'inventore itaque laboriosam mollitia neque nisi quasi quia repellendus\n'
        + 'similique, velit. Animi architecto earum excepturi in nemo optio\n'
        + 'praesentium totam voluptate? Ab ad dignissimos expedita laborum\n'
        + 'molestiae neque nesciunt nihil sed totam voluptate. Ab aliquid\n'
        + 'debitis doloremque, error impedit in ipsum laborum, perspiciatis\n'
        + 'provident quibusdam, rerum sunt temporibus? Adipisci, dolor provident\n'
        + 'quam quibusdam rem rerum. Ab accusantium aspernatur consectetur\n'
        + 'dignissimos exercitationem laboriosam maxime minima nihil nostrum\n'
        + 'numquam obcaecati odit perspiciatis, praesentium quae quis quo,\n'
        + 'repellat soluta sunt? In necessitatibus porro sapiente sit voluptate!\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
        + 'A, animi aspernatur assumenda cum eligendi esse hic incidunt\n'
        + 'inventore itaque laboriosam mollitia neque nisi quasi quia repellendus\n'
        + 'similique, velit. Animi architecto earum excepturi in nemo optio\n'
        + 'praesentium totam voluptate? Ab ad dignissimos expedita laborum\n'
        + 'molestiae neque nesciunt nihil sed totam voluptate. Ab aliquid\n'
        + 'debitis doloremque, error impedit in ipsum laborum, perspiciatis\n'
        + 'provident quibusdam, rerum sunt temporibus? Adipisci, dolor provident\n'
        + 'quam quibusdam rem rerum. Ab accusantium aspernatur consectetur\n'
        + 'dignissimos exercitationem laboriosam maxime minima nihil nostrum\n'
        + 'numquam obcaecati odit perspiciatis, praesentium quae quis quo,\n'
        + 'repellat soluta sunt? In necessitatibus porro sapiente sit voluptate!\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

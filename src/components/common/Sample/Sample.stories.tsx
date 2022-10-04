import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sample } from './Sample';

export default {
  title: 'Common/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = () => <Sample />;

export const Default = Template.bind({});

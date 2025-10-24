import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { ReactChart } from '../ReactChart';
import { BasicLineTemplate } from './BasicLineTemplate';
import { StackedLineTemplate } from './StackedLineTemplate';
import { GradientStackedAreaTemplate } from './GradientStackedAreaTemplate';
import { StackedAreaTemplate } from './StackedAreaTemplate';
import { StepLineTemplate } from './StepLineTemplate';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/LineChart',
  component: ReactChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Bind ECharts click via onEvents
  args: { onEvents: { click: fn() } }
} satisfies Meta<typeof ReactChart>;

export default meta;
type Story = StoryObj<typeof ReactChart>;

export const BasicLine: Story = {
  render: BasicLineTemplate,
  args: {}
};

export const StackedLine: Story = {
  render: StackedLineTemplate,
  args: {}
};

export const StackedArea: Story = {
  render: StackedAreaTemplate,
  args: {}
};

export const GradientStackedArea: Story = {
  render: GradientStackedAreaTemplate,
  args: {}
};

export const StepLine: Story = {
  render: StepLineTemplate,
  args: {}
};

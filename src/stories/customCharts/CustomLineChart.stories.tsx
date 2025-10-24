import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CustomLineChart } from './CustomLineChart';
import { CustomLineTemplate } from './CustomLineChartTemplate';
import { CustomStackedLineTemplate } from './CustomStackedLineTemplate';
import { CustomStackedAreaTemplate } from './CustomStackedAreaTemplate';
import { CustomGradientStackedAreaTemplate } from './CustomGradientStackedAreaTemplate';
import { CustomDelayGradientStackedAreaTemplate } from './CustomDelayGradientStackedAreaTemplate';

const meta = {
  title: 'Example/CustomChart',
  component: CustomLineChart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'object',
      description: 'Размер диаграммы'
    },
    onEvents: {
      control: 'object',
      description: 'Обработчики событий'
    }
  },
  args: {
    onEvents: { click: fn() },
    size: { width: 1023, height: 741 }
  }
} satisfies Meta<typeof CustomLineChart>;

export default meta;
type Story = StoryObj<typeof CustomLineChart>;

export const BasicLine: Story = {
  render: CustomLineTemplate,
  args: {}
};

export const StackedLine: Story = {
  render: CustomStackedLineTemplate,
  args: {}
};

export const StackedArea: Story = {
  render: CustomStackedAreaTemplate,
  args: {}
};

export const GradientStackedArea: Story = {
  render: CustomGradientStackedAreaTemplate,
  args: {}
};

export const DelayAnimation: Story = {
  render: CustomDelayGradientStackedAreaTemplate,
  args: {}
};

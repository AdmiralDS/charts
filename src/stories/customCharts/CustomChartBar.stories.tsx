import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { CustomChart } from "./CustomChart";
import { CustomChartTemplate } from "./CustomChartBarTemplate";
import { CustomChartWithBackgroundTemplate } from "./CustomChartWithBackgroundTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/CustomChart",
  component: CustomChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof CustomChart>;

export default meta;
type Story = StoryObj<typeof CustomChart>;

export const BasicBar: Story = {
  render: CustomChartTemplate,
  args: {},
};

export const BarWithBackground: Story = {
  render: CustomChartWithBackgroundTemplate,
  args: {},
};

import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { BarChart } from "../ReactChart";
import { BasicBarTemplate } from "./BasicBarTemplate";
import { BarWithBackgroundTemplate } from "./BarWithBackgroundTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/BarChart",
  component: BarChart,
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof BarChart>;

export const BasicBar: Story = {
  render: BasicBarTemplate,
  args: {},
};

export const BarWithBackground: Story = {
  render: BarWithBackgroundTemplate,
  args: {},
};

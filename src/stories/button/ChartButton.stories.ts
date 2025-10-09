import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { ChartButton } from "./ChartButton";
import { WithIconTemplate } from "./WithIconTemplate";
import { OutlineTemplate } from "./OutlineTemplate";
import { LoadingTemplate } from "./LoadingTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: ChartButton,
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
} satisfies Meta<typeof ChartButton>;

export default meta;
type Story = StoryObj<typeof ChartButton>;

export const WithIcon: Story = {
  render: WithIconTemplate,
  args: { label: "Send" },
};

export const Outline: Story = {
  render: OutlineTemplate,
  args: { label: "Outline" },
};

export const Loading: Story = {
  render: LoadingTemplate,
  args: { label: "Loading..." },
};

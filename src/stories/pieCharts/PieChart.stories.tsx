import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { ReactChart } from "../ReactChart";
import { BasicPieTemplate } from "./BasicPieTemplate";
import { PieDoughnutTemplate } from "./PieDoughnutTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/PieChart",
  component: ReactChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Bind ECharts click via onEvents
  args: { onEvents: { click: fn() } },
} satisfies Meta<typeof ReactChart>;

export default meta;
type Story = StoryObj<typeof ReactChart>;

export const BasicPie: Story = {
  render: BasicPieTemplate,
  args: {},
};

export const PieDoughnut: Story = {
  render: PieDoughnutTemplate,
  args: {},
};

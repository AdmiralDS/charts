import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { CustomChart } from "./CustomChart";
import { CustomPieTemplate } from "./CustomPieTemplate";
import { CustomPieDoughnutTemplate } from "./CustomPieDoughnutTemplate";

const meta = {
  title: "Example/Native ECharts/PieChart",
  component: CustomChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "object",
      description: "Размер диаграммы",
    },
    onEvents: {
      control: "object",
      description: "Обработчики событий",
    },
  },
  args: {
    onEvents: { click: fn() },
    size: { width: 1023, height: 741 },
  },
} satisfies Meta<typeof CustomChart>;

export default meta;
type Story = StoryObj<typeof CustomChart>;

export const BasicPie: Story = {
  render: CustomPieTemplate,
  args: {},
};

export const PieDoughnut: Story = {
  render: CustomPieDoughnutTemplate,
  args: {},
};

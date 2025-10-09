import { LIGHT_THEME } from "@admiral-ds/react-ui";
import type { EChartsOption } from "echarts";
import { useTheme } from "styled-components";
import { BarChart } from "../ReactChart";

export const BarWithBackgroundTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;
  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        data: [120, 200, 150, 80, 70, 110, 130],
        itemStyle: {
          color: theme.color["Primary/Primary 50"],
        },
        showBackground: true,
        backgroundStyle: {
          color: "#0000000A",
        },
      },
    ],
  };

  return <BarChart option={option} size={{ width: 1023, height: 741 }} />;
};

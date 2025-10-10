import { LIGHT_THEME } from "@admiral-ds/react-ui";
import type { EChartsOption } from "echarts";
import { useTheme } from "styled-components";
import { CustomChart } from "./CustomChart";

export const CustomChartWithBackgroundTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;

  const axisLabelStyle = {
    fontFamily: theme.fontFamily,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 15,
    color: theme.color["Neutral/Neutral 90"],
  } as const;

  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLabel: axisLabelStyle,
      axisLine: {
        lineStyle: {
          color: theme.color["Neutral/Neutral 70"],
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: axisLabelStyle,
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.color["Neutral/Neutral 20"],
        },
      },
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
          color: theme.color["Opacity/Neutral 4"],
        },
      },
    ],
  };

  return <CustomChart option={option} size={{ width: 1023, height: 741 }} />;
};

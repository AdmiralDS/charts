import { LIGHT_THEME } from "@admiral-ds/react-ui";
import type { EChartsOption } from "echarts";
import { useTheme } from "styled-components";
import { ReactChart } from "../ReactChart";

export const BasicPieTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;

  const option: EChartsOption = {
    textStyle: {
      fontFamily: theme.fontFamily,
      color: "#252629",
    },
    title: {
      text: "Referer of a Website",
      subtext: "Fake Data",
      left: "center",
      textStyle: {
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 23,
      },
      subtextStyle: {
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 15,
        color: "#74767B",
      },
    },
    tooltip: {
      trigger: "item",
      textStyle: {
        color: "#74767B",
      },
    },
    legend: {
      orient: "vertical",
      left: "left",
      textStyle: {
        fontWeight: 300,
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        label: {
          show: true,
          fontWeight: 300,
          color: "#252629",
        },
        emphasis: {
          label: {
            fontWeight: 300,
            color: "#252629",
          },
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };

  return (
    <ReactChart
      option={option}
      style={{ width: 1023, height: 741 }}
      opts={{ renderer: "svg" }} // Опционально. Дополнительные конфигурации диаграмм (renderer, devicePixelRatio)
    />
  );
};

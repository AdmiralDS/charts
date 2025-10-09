import { useEffect, useRef, type HTMLAttributes } from "react";
import { init, type EChartsOption } from "echarts";

export interface ChartProps extends HTMLAttributes<HTMLDivElement> {
  option: EChartsOption;
  size: {width: number, height: number};
}

export const BarChart = ({ option, size }: ChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = init(chartRef.current, null, { renderer: "svg" });

    chart.setOption(option);

    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [option]);

  return (
    <div
      ref={chartRef}
      style={size}
      role="img"
      aria-label="Simple bar chart"
    />
  );
};
// function useState<T>(optionDefault: EChartsOption): [any, any] {
//   throw new Error("Function not implemented.");
// }

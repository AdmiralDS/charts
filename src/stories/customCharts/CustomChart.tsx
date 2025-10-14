import { useEffect, useRef, type HTMLAttributes } from "react";
import { init, type EChartsOption } from "echarts";

export interface CustomChartProps extends HTMLAttributes<HTMLDivElement> {
  option: EChartsOption;
  size: { width: number; height: number };
}

export const CustomChart = ({ option, size, ...props }: CustomChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<ReturnType<typeof init> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = init(chartRef.current, null, { renderer: "svg" });
    chartInstanceRef.current = chart;
    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
      chartInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const chart = chartInstanceRef.current;
    if (!chart) return;

    chart.setOption(option);
    chart.resize();
  }, [option, size]);

  return (
    <div
      {...props}
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

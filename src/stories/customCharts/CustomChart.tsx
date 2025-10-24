import { useEffect, useRef, type HTMLAttributes } from 'react';
import { init, type EChartsOption } from 'echarts';

export interface CustomChartProps extends HTMLAttributes<HTMLDivElement> {
  option: EChartsOption;
  size: { width: number; height: number };
  onEvents?: Record<string, (params: unknown) => void>;
  ariaLabel?: string;
}

export const CustomChart = ({ option, size, onEvents, ariaLabel = 'Custom chart', ...props }: CustomChartProps) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstanceRef = useRef<ReturnType<typeof init> | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = init(chartRef.current, null, { renderer: 'svg' });
    chartInstanceRef.current = chart;

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    if (onEvents) {
      Object.entries(onEvents).forEach(([event, handler]) => {
        chart.on(event, handler);
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
      chartInstanceRef.current = null;
    };
  }, [onEvents]);

  useEffect(() => {
    const chart = chartInstanceRef.current;
    if (!chart) return;

    chart.setOption(option, true);
    chart.resize();
  }, [option, size]);

  return <div {...props} ref={chartRef} style={size} role='img' aria-label={ariaLabel} />;
};
// function useState<T>(optionDefault: EChartsOption): [any, any] {
//   throw new Error("Function not implemented.");
// }

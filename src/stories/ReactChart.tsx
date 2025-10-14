import { useRef } from "react";
import ReactEcharts, { type EChartsReactProps } from "echarts-for-react";
import type EChartsReact from "echarts-for-react";

export const ReactChart = ({
  option,
  notMerge = false,
  onChartReady = () => {},
  onEvents,
  ...props
}: EChartsReactProps) => {
  const chartRef = useRef<EChartsReact | null>(null);

  return (
    <ReactEcharts
      {...props}
      ref={chartRef}
      option={option} // Обязательно. Объект с параметрами конфигурации (тип EChartsOption)
      notMerge={notMerge} // Опционально. Флаг обновления данных (объединение данных с предыдущим option)
      onChartReady={onChartReady} // Опционально. Функция обратного вызова, когда диаграмма готова
      onEvents={onEvents} // Опционально. Список событий, на которые идет подписка
    />
  );
};

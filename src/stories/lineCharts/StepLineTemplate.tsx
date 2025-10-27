import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { ReactChart } from '../ReactChart';

export const StepLineTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;

  const axisLabelStyle = {
    fontFamily: theme.fontFamily,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 15,
    color: theme.color['Neutral/Neutral 90']
  } as const;

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: theme.color['Neutral/Neutral 10'],
      borderColor: theme.color['Neutral/Neutral 30'],
      textStyle: {
        color: theme.color['Neutral/Neutral 90']
      }
    },
    legend: {
      data: ['Ступенчатая', 'Обычная'],
      top: 30,
      textStyle: {
        fontFamily: theme.fontFamily,
        color: theme.color['Neutral/Neutral 70']
      },
      inactiveColor: theme.color['Neutral/Neutral 40']
    },
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      axisLabel: axisLabelStyle,
      axisLine: {
        lineStyle: {
          color: theme.color['Neutral/Neutral 70']
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: axisLabelStyle,
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.color['Neutral/Neutral 20']
        }
      }
    },
    series: [
      {
        name: 'Ступенчатая',
        type: 'line',
        step: 'middle',
        data: [0, 1, 2, 1, 3, 2, 4, 3, 5, 4, 6],
        lineStyle: {
          width: 3,
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        },
        symbol: 'rect',
        symbolSize: 8
      },
      {
        name: 'Обычная',
        type: 'line',
        data: [0, 1, 2, 1, 3, 2, 4, 3, 5, 4, 6],
        lineStyle: {
          width: 2,
          color: theme.color['Teal/Teal 50']
        },
        itemStyle: {
          color: theme.color['Teal/Teal 50']
        },
        symbol: 'circle',
        symbolSize: 6
      }
    ]
  };

  return <ReactChart option={option} style={{ width: 1023, height: 741 }} opts={{ renderer: 'svg' }} />;
};

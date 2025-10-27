import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { ReactChart } from '../ReactChart';

export const GradientStackedAreaTemplate = () => {
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
    xAxis: {
      type: 'category',
      data: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
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
        type: 'line',
        data: [150, 230, 224, 218, 135, 147, 260],
        smooth: true,
        lineStyle: {
          width: 4,
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50'],
          borderWidth: 2,
          borderColor: theme.color['Neutral/Neutral 10']
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: `${theme.color['Primary/Primary 50']}60`
              },
              {
                offset: 1,
                color: `${theme.color['Primary/Primary 50']}10`
              }
            ]
          }
        },
        symbol: 'circle',
        symbolSize: 8,
        emphasis: {
          itemStyle: {
            borderWidth: 4,
            borderColor: theme.color['Primary/Primary 30']
          }
        }
      }
    ]
  };

  return <ReactChart option={option} style={{ width: 1023, height: 741 }} opts={{ renderer: 'svg' }} />;
};

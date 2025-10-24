import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { CustomLineChart } from './CustomLineChart';

export const CustomGradientStackedAreaTemplate = () => {
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
      data: ['Продажи', 'Прибыль'],
      top: 30,
      textStyle: {
        fontFamily: theme.fontFamily,
        color: theme.color['Neutral/Neutral 70']
      },
      inactiveColor: theme.color['Neutral/Neutral 40']
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
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
        name: 'Продажи',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        smooth: true,
        lineStyle: {
          width: 3,
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50']
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
        }
      },
      {
        name: 'Прибыль',
        type: 'line',
        data: [60, 72, 51, 84, 40, 130, 110, 82, 91, 134, 190, 230],
        smooth: true,
        lineStyle: {
          width: 3,
          color: theme.color['Teal/Teal 50']
        },
        itemStyle: {
          color: theme.color['Teal/Teal 50']
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
                color: `${theme.color['Teal/Teal 50']}60`
              },
              {
                offset: 1,
                color: `${theme.color['Teal/Teal 50']}10`
              }
            ]
          }
        }
      }
    ]
  };

  return <CustomLineChart option={option} size={{ width: 1023, height: 741 }} />;
};

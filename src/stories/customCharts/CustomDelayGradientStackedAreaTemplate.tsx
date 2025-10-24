import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { CustomLineChart } from './CustomLineChart';

export const CustomDelayGradientStackedAreaTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;

  const axisLabelStyle = {
    fontFamily: theme.fontFamily,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 15,
    color: theme.color['Neutral/Neutral 90']
  } as const;

  const option: EChartsOption = {
    backgroundColor: theme.color['Neutral/Neutral 05'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: theme.color['Neutral/Neutral 10'],
      borderColor: theme.color['Neutral/Neutral 30'],
      textStyle: {
        color: theme.color['Neutral/Neutral 90']
      }
    },
    legend: {
      data: ['Температура', 'Влажность'],
      top: 30,
      textStyle: {
        fontFamily: theme.fontFamily,
        color: theme.color['Neutral/Neutral 70']
      },
      inactiveColor: theme.color['Neutral/Neutral 40']
    },
    grid: {
      containLabel: true,
      backgroundColor: theme.color['Neutral/Neutral 10'],
      borderColor: theme.color['Neutral/Neutral 20'],
      borderWidth: 1
    },
    xAxis: {
      type: 'category',
      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
      axisLabel: axisLabelStyle,
      axisLine: {
        lineStyle: {
          color: theme.color['Neutral/Neutral 70']
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: 'Температура (°C)',
        position: 'left',
        axisLabel: axisLabelStyle,
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.color['Neutral/Neutral 20']
          }
        }
      },
      {
        type: 'value',
        name: 'Влажность (%)',
        position: 'right',
        axisLabel: axisLabelStyle,
        splitLine: {
          show: false
        }
      }
    ],
    series: [
      {
        name: 'Температура',
        type: 'line',
        yAxisIndex: 0,
        data: [15, 12, 18, 25, 28, 22, 16],
        smooth: true,
        lineStyle: {
          width: 4,
          color: theme.color['Warning/Warning 40']
        },
        itemStyle: {
          color: theme.color['Warning/Warning 40'],
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
                color: `${theme.color['Warning/Warning 40']}60`
              },
              {
                offset: 1,
                color: `${theme.color['Warning/Warning 40']}10`
              }
            ]
          }
        },
        animationDelay: (idx: number) => idx * 100
      },
      {
        name: 'Влажность',
        type: 'line',
        yAxisIndex: 1,
        data: [80, 85, 70, 60, 55, 65, 75],
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
        animationDelay: (idx: number) => idx * 100 + 200
      }
    ],
    animation: true,
    animationDuration: 2000,
    animationEasing: 'cubicOut'
  };

  return <CustomLineChart option={option} size={{ width: 1023, height: 741 }} />;
};

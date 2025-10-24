import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { CustomLineChart } from './CustomLineChart';

export const CustomStackedLineTemplate = () => {
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
      data: ['2022', '2023', '2024'],
      top: 30,
      textStyle: {
        fontFamily: theme.fontFamily,
        color: theme.color['Neutral/Neutral 70']
      },
      inactiveColor: theme.color['Neutral/Neutral 40']
    },
    xAxis: {
      type: 'category',
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
        name: '2022',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        lineStyle: {
          width: 2,
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        }
      },
      {
        name: '2023',
        type: 'line',
        stack: 'Total',
        data: [150, 162, 131, 164, 120, 260, 240, 212, 221, 264, 320, 360],
        lineStyle: {
          width: 2,
          color: theme.color['Teal/Teal 50']
        },
        itemStyle: {
          color: theme.color['Teal/Teal 50']
        }
      },
      {
        name: '2024',
        type: 'line',
        stack: 'Total',
        data: [180, 192, 161, 194, 150, 290, 270, 242, 251, 294, 350, 390],
        lineStyle: {
          width: 2,
          color: theme.color['Warning/Warning 40']
        },
        itemStyle: {
          color: theme.color['Warning/Warning 40']
        }
      }
    ]
  };

  return <CustomLineChart option={option} size={{ width: 1023, height: 741 }} />;
};

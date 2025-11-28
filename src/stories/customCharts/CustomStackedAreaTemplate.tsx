import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { CustomChart } from './CustomChart';

export const CustomStackedAreaTemplate = () => {
  const theme = useTheme() || LIGHT_THEME;

  const axisLabelStyle = {
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 15,
  } as const;

  const option: EChartsOption = {
    textStyle: {
      fontFamily: theme.fontFamily,
      color: theme.color['Neutral/Neutral 90']
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: theme.color['Neutral/Neutral 10'],
      borderColor: theme.color['Neutral/Neutral 30'],
      textStyle: {
        color: theme.color['Neutral/Neutral 90']
      }
    },
    legend: {
      data: ['Продажи', 'Маркетинг', 'Разработка'],
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
        name: 'Продажи',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
        areaStyle: {
          color: theme.color['Primary/Primary 50']
        },
        lineStyle: {
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        }
      },
      {
        name: 'Маркетинг',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
        areaStyle: {
          color: theme.color['Teal/Teal 50']
        },
        lineStyle: {
          color: theme.color['Teal/Teal 50']
        },
        itemStyle: {
          color: theme.color['Teal/Teal 50']
        }
      },
      {
        name: 'Разработка',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410, 320, 332, 301, 334, 390],
        areaStyle: {
          color: theme.color['Warning/Warning 40']
        },
        lineStyle: {
          color: theme.color['Warning/Warning 40']
        },
        itemStyle: {
          color: theme.color['Warning/Warning 40']
        }
      }
    ]
  };

  return <CustomChart option={option} size={{ width: 1023, height: 741 }} ariaLabel='Custom stacked area chart' />;
};

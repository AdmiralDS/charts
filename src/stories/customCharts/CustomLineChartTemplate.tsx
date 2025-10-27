import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { CustomChart } from './CustomChart';

export const CustomLineTemplate = () => {
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        }
      }
    ]
  };

  return <CustomChart option={option} size={{ width: 1023, height: 741 }} ariaLabel='Custom basic line chart' />;
};

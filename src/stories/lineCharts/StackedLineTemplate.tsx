import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { ReactChart } from '../ReactChart';

export const StackedLineTemplate = () => {
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
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
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
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
        lineStyle: {
          width: 2,
          color: theme.color['Purple/Purple 70']
        },
        itemStyle: {
          color: theme.color['Purple/Purple 70']
        }
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
        lineStyle: {
          width: 2,
          color: theme.color['Attention/Attention 40']
        },
        itemStyle: {
          color: theme.color['Attention/Attention 40']
        }
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
        lineStyle: {
          width: 2,
          color: theme.color['Teal/Teal 50']
        },
        itemStyle: {
          color: theme.color['Teal/Teal 50']
        }
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320],
        lineStyle: {
          width: 2,
          color: theme.color['Warning/Warning 40']
        },
        itemStyle: {
          color: theme.color['Warning/Warning 40']
        }
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        lineStyle: {
          width: 2,
          color: theme.color['Primary/Primary 50']
        },
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        }
      }
    ]
  };

  return <ReactChart option={option} style={{ width: 1023, height: 741 }} opts={{ renderer: 'svg' }} />;
};

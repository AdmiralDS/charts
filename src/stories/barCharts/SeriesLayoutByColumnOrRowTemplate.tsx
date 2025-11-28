import { LIGHT_THEME } from '@admiral-ds/react-ui';
import type { EChartsOption } from 'echarts';
import { useTheme } from 'styled-components';
import { ReactChart } from '../ReactChart';

export const SeriesLayoutByColumnOrRowTemplate = () => {
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
    legend: {
      textStyle: {
        color: theme.color['Neutral/Neutral 70']
      },
      inactiveColor: theme.color['Neutral/Neutral 40']
    },
    tooltip: {
      textStyle: {
        color: theme.color['Neutral/Neutral 90']
      }
    },
    dataset: {
      source: [
        ['product', '2012', '2013', '2014', '2015'],
        ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
        ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
        ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
      ]
    },
    xAxis: [
      {
        type: 'category',
        gridIndex: 0,
        axisLabel: axisLabelStyle,
        axisLine: {
          lineStyle: {
            color: theme.color['Neutral/Neutral 70']
          }
        }
      },
      {
        type: 'category',
        gridIndex: 1,
        axisLabel: axisLabelStyle,
        axisLine: {
          lineStyle: {
            color: theme.color['Neutral/Neutral 70']
          }
        }
      }
    ],
    yAxis: [
      {
        gridIndex: 0,
        axisLabel: axisLabelStyle,
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.color['Neutral/Neutral 20']
          }
        }
      },
      {
        gridIndex: 1,
        axisLabel: axisLabelStyle,
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.color['Neutral/Neutral 20']
          }
        }
      }
    ],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        itemStyle: {
          color: theme.color['Primary/Primary 50']
        }
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        itemStyle: {
          color: theme.color['Success/Success 50 Main']
        }
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row',
        itemStyle: {
          color: theme.color['Purple/Purple 60 Main']
        }
      },
      // These series are in the second grid.
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: theme.color['Warning/Warning 40']
        }
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: theme.color['Cyan/Cyan 50']
        }
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: theme.color['Attention/Attention 40']
        }
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: theme.color['Magenta/Magenta 50']
        }
      }
    ]
  };

  return (
    <ReactChart
      option={option}
      style={{ width: 1023, height: 741 }}
      opts={{ renderer: 'svg' }} // Опционально. Дополнительные конфигурации диаграмм (renderer, devicePixelRatio)
    />
  );
};

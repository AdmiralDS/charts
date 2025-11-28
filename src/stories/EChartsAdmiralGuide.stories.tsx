import { LIGHT_THEME } from "@admiral-ds/react-ui";
import type { Meta as StoryMeta, StoryObj } from "@storybook/react";
import type { EChartsOption } from "echarts";
import { useTheme } from "styled-components";
import { CustomChart } from "./customCharts/CustomChart";
import { ReactChart } from "./ReactChart";

const meta = {
  title: "Guide/ECharts with Admiral DS",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies StoryMeta<typeof ReactChart>;

export default meta;

const buildOption = (theme: typeof LIGHT_THEME): EChartsOption => {
  const axisLabelStyle = {
    fontFamily: theme.fontFamily,
    fontWeight: 300,
    fontSize: 12,
    lineHeight: 15,
    color: theme.color["Neutral/Neutral 90"],
  } as const;

  return {
    textStyle: {
      fontFamily: theme.fontFamily,
      color: theme.color["Neutral/Neutral 90"],
    },
    tooltip: {},
    legend: {
      textStyle: {
        color: theme.color["Neutral/Neutral 70"],
      },
      inactiveColor: theme.color["Neutral/Neutral 40"],
    },
    dataset: {
      source: [
        ["product", "2012", "2013", "2014", "2015"],
        ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
        ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
        ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
      ],
    },
    xAxis: [
      {
        type: "category",
        gridIndex: 0,
        axisLabel: axisLabelStyle,
        axisLine: { lineStyle: { color: theme.color["Neutral/Neutral 70"] } },
      },
      {
        type: "category",
        gridIndex: 1,
        axisLabel: axisLabelStyle,
        axisLine: { lineStyle: { color: theme.color["Neutral/Neutral 70"] } },
      },
    ],
    yAxis: [
      {
        gridIndex: 0,
        axisLabel: axisLabelStyle,
        splitLine: {
          show: true,
          lineStyle: { color: theme.color["Neutral/Neutral 20"] },
        },
      },
      {
        gridIndex: 1,
        axisLabel: axisLabelStyle,
        splitLine: {
          show: true,
          lineStyle: { color: theme.color["Neutral/Neutral 20"] },
        },
      },
    ],
    grid: [{ bottom: "55%" }, { top: "55%" }],
    series: [
      { type: "bar", seriesLayoutBy: "row", itemStyle: { color: theme.color["Primary/Primary 50"] } },
      { type: "bar", seriesLayoutBy: "row", itemStyle: { color: theme.color["Success/Success 50 Main"] } },
      { type: "bar", seriesLayoutBy: "row", itemStyle: { color: theme.color["Purple/Purple 60 Main"] } },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1, itemStyle: { color: theme.color["Warning/Warning 40"] } },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1, itemStyle: { color: theme.color["Cyan/Cyan 50"] } },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1, itemStyle: { color: theme.color["Attention/Attention 40"] } },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1, itemStyle: { color: theme.color["Magenta/Magenta 50"] } },
    ],
  };
};

type Story = StoryObj<typeof ReactChart>;

const GuideContent = () => {
  const theme = useTheme() || LIGHT_THEME;
  const option = buildOption(theme);
  const textColor = theme.color?.["Neutral/Neutral 90"] ?? "#252629";
  const subtleBg = theme.color?.["Neutral/Neutral 05"] ?? "#f6f8fa";
  return (
    <div
      style={{
        display: "grid",
        gap: 16,
        maxWidth: 820,
        fontFamily: theme.fontFamily,
        color: textColor,
        lineHeight: 1.5,
      }}
    >
      <h1>ECharts + Admiral DS</h1>

      <section>
        <h2>Рекомендации по использованию ECharts</h2>
        <p>
          В проектах для визуализации данных используем ECharts: он гибкий и
          хорошо настраивается под дизайн-систему Admiral.
        </p>

        <h3>Что можно кастомизировать</h3>
        <ul>
          <li>Цвета — используйте палитру дизайн-системы Admiral.</li>
          <li>Шрифты — можно менять на VTB UI.</li>
          <li>Меню диаграммы — размещение, стиль текста, иконки.</li>
          <li>Tooltip — фон, цвет текста, формат чисел.</li>
          <li>Сетка и оси — цвет, толщина, подписи единиц измерения.</li>
        </ul>

        <h3>Чего лучше избегать</h3>
        <ul>
          <li>Скругления на графиках — ECharts поддерживает их плохо.</li>
          <li>3D-эффекты — ухудшают читаемость и не соответствуют стилю.</li>
          <li>
            Сложные градиенты — выбирайте простые заливки с прозрачностью.
          </li>
          <li>Перегруженные подписи — не больше 5–7 делений на осях.</li>
        </ul>

        <h3>Лучшие практики</h3>
        <ul>
          <li>Тренды — Line chart.</li>
          <li>Сравнение — Bar chart.</li>
          <li>Доли — Pie.</li>
          <li>Tooltip должен выдавать точное значение.</li>
          <li>Подписи осей и легенды — короткие и понятные.</li>
        </ul>

        <p>
          Держите визуализацию минималистичной: без лишних скруглений и 3D.
          Работайте цветами, текстами и структурой, чтобы графики оставались
          читаемыми и соответствовали дизайн-системе.
        </p>
      </section>
      <p>
        Как стилизовать ECharts под тему Admiral DS и подключать чарты двумя
        способами: нативно через CustomChart и через обертку ReactChart
        (echarts-for-react).
      </p>

      <section>
      <h2>Базовые стили от темы</h2>
      <p>
        Получите тему (<code>useTheme() || LIGHT_THEME</code>) и задайте
        глобальный textStyle. Пример ниже использует бар-чарт из
        SeriesLayoutByColumnOrRow:
      </p>
      <pre
        style={{
          padding: 12,
          background: subtleBg,
          borderRadius: 8,
            overflow: "auto",
            color: textColor,
            border: `1px solid ${theme.color?.["Neutral/Neutral 20"] ?? "#e0e0e0"}`,
          }}
        >
{`const axisLabelStyle = {
  fontFamily: theme.fontFamily,
  fontWeight: 300,
  fontSize: 12,
  lineHeight: 15,
  color: theme.color["Neutral/Neutral 90"],
};

const option: EChartsOption = {
  textStyle: { fontFamily: theme.fontFamily, color: theme.color["Neutral/Neutral 90"] },
  tooltip: {},
  legend: {
    textStyle: { color: theme.color["Neutral/Neutral 70"] },
    inactiveColor: theme.color["Neutral/Neutral 40"],
  },
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015"],
      ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
      ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
      ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
    ],
  },
  xAxis: [
    { type: "category", gridIndex: 0, axisLabel: axisLabelStyle },
    { type: "category", gridIndex: 1, axisLabel: axisLabelStyle },
  ],
  yAxis: [
    { gridIndex: 0, axisLabel: axisLabelStyle },
    { gridIndex: 1, axisLabel: axisLabelStyle },
  ],
  grid: [{ bottom: "55%" }, { top: "55%" }],
  series: [
    { type: "bar", seriesLayoutBy: "row", itemStyle: { color: theme.color["Primary/Primary 50"] } },
    { type: "bar", seriesLayoutBy: "row", itemStyle: { color: theme.color["Success/Success 50 Main"] } },
    // ...
  ],
};`}
        </pre>
        <p>
          Локально переопределяйте только отличия (например, fontWeight для
          title), без дублирования fontFamily.
        </p>
      </section>

      <section>
        <h2>Вариант 1. Нативный ECharts (customCharts)</h2>
        <CustomChart
          option={option}
          size={{ width: 520, height: 360 }}
          aria-label="Пример нативного чарта"
        />
        <ul>
          <li>Полный контроль: init/setOption/resize внутри CustomChart.</li>
          <li>События через onEvents.</li>
          <li>Подходит, если нужен точный контроль жизненного цикла.</li>
        </ul>
      </section>

      <section>
        <h2>Вариант 2. React обертка (ReactChart)</h2>
        <ReactChart
          option={option}
          style={{ width: 520, height: 360 }}
          opts={{ renderer: "svg" }}
          onEvents={{ click: () => undefined }}
        />
        <ul>
          <li>echarts-for-react сам обновляет чарт при смене option.</li>
          <li>Меньше кода и быстрый старт.</li>
          <li>Настройки через props: opts, notMerge, onEvents и т.д.</li>
        </ul>
      </section>

      <section>
        <h2>Что выбрать</h2>
        <ul>
          <li>Нужен тонкий контроль — CustomChart (нативный путь).</li>
          <li>
            Нужно быстро и просто — ReactChart (обертка echarts-for-react).
          </li>
        </ul>
      </section>

      <section>
        <h2>Когда выбрать нативный ECharts или ReactChart</h2>
        <ul>
          <li>
            CustomChart (нативный) — если нужен полный контроль init/setOption,
            ручное управление жизненным циклом и тонкие настройки.
          </li>
          <li>
            ReactChart — если важен быстрый старт, меньше кода, автоматическое
            обновление и стандартные сценарии с событиями.
          </li>
        </ul>
      </section>
    </div>
  );
};

export const Guide: Story = {
  render: GuideContent,
  name: "Гайд: стилизация и подключение",
};

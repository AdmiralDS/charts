import{n as s,L as a,j as e}from"./iframe-BDVfPGG5.js";import{C as n}from"./CustomChart-IdZp3Jt7.js";import{R as c}from"./ReactChart-IgYguIt_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-m1JkZ8lu.js";const m={title:"Guide/ECharts with Admiral DS",tags:["autodocs"],parameters:{layout:"centered"}},d=r=>{const t={fontFamily:r.fontFamily,fontWeight:300,fontSize:12,lineHeight:15,color:r.color["Neutral/Neutral 90"]};return{textStyle:{fontFamily:r.fontFamily,color:r.color["Neutral/Neutral 90"]},tooltip:{},legend:{textStyle:{color:r.color["Neutral/Neutral 70"]},inactiveColor:r.color["Neutral/Neutral 40"]},dataset:{source:[["product","2012","2013","2014","2015"],["Matcha Latte",41.1,30.4,65.1,53.3],["Milk Tea",86.5,92.1,85.7,83.1],["Cheese Cocoa",24.1,67.2,79.5,86.4]]},xAxis:[{type:"category",gridIndex:0,axisLabel:t,axisLine:{lineStyle:{color:r.color["Neutral/Neutral 70"]}}},{type:"category",gridIndex:1,axisLabel:t,axisLine:{lineStyle:{color:r.color["Neutral/Neutral 70"]}}}],yAxis:[{gridIndex:0,axisLabel:t,splitLine:{show:!0,lineStyle:{color:r.color["Neutral/Neutral 20"]}}},{gridIndex:1,axisLabel:t,splitLine:{show:!0,lineStyle:{color:r.color["Neutral/Neutral 20"]}}}],grid:[{bottom:"55%"},{top:"55%"}],series:[{type:"bar",seriesLayoutBy:"row",itemStyle:{color:r.color["Primary/Primary 50"]}},{type:"bar",seriesLayoutBy:"row",itemStyle:{color:r.color["Success/Success 50 Main"]}},{type:"bar",seriesLayoutBy:"row",itemStyle:{color:r.color["Purple/Purple 60 Main"]}},{type:"bar",xAxisIndex:1,yAxisIndex:1,itemStyle:{color:r.color["Warning/Warning 40"]}},{type:"bar",xAxisIndex:1,yAxisIndex:1,itemStyle:{color:r.color["Cyan/Cyan 50"]}},{type:"bar",xAxisIndex:1,yAxisIndex:1,itemStyle:{color:r.color["Attention/Attention 40"]}},{type:"bar",xAxisIndex:1,yAxisIndex:1,itemStyle:{color:r.color["Magenta/Magenta 50"]}}]}},x=()=>{const r=s()||a,t=d(r),i=r.color?.["Neutral/Neutral 90"]??"#252629",o=r.color?.["Neutral/Neutral 05"]??"#f6f8fa";return e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:820,fontFamily:r.fontFamily,color:i,lineHeight:1.5},children:[e.jsx("h1",{children:"ECharts + Admiral DS"}),e.jsxs("section",{children:[e.jsx("h2",{children:"Рекомендации по использованию ECharts"}),e.jsx("p",{children:"В проектах для визуализации данных используем ECharts: он гибкий и хорошо настраивается под дизайн-систему Admiral."}),e.jsx("h3",{children:"Что можно кастомизировать"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Цвета — используйте палитру дизайн-системы Admiral."}),e.jsx("li",{children:"Шрифты — можно менять на VTB UI."}),e.jsx("li",{children:"Меню диаграммы — размещение, стиль текста, иконки."}),e.jsx("li",{children:"Tooltip — фон, цвет текста, формат чисел."}),e.jsx("li",{children:"Сетка и оси — цвет, толщина, подписи единиц измерения."})]}),e.jsx("h3",{children:"Чего лучше избегать"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Скругления на графиках — ECharts поддерживает их плохо."}),e.jsx("li",{children:"3D-эффекты — ухудшают читаемость и не соответствуют стилю."}),e.jsx("li",{children:"Сложные градиенты — выбирайте простые заливки с прозрачностью."}),e.jsx("li",{children:"Перегруженные подписи — не больше 5–7 делений на осях."})]}),e.jsx("h3",{children:"Лучшие практики"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Тренды — Line chart."}),e.jsx("li",{children:"Сравнение — Bar chart."}),e.jsx("li",{children:"Доли — Pie."}),e.jsx("li",{children:"Tooltip должен выдавать точное значение."}),e.jsx("li",{children:"Подписи осей и легенды — короткие и понятные."})]}),e.jsx("p",{children:"Держите визуализацию минималистичной: без лишних скруглений и 3D. Работайте цветами, текстами и структурой, чтобы графики оставались читаемыми и соответствовали дизайн-системе."})]}),e.jsx("p",{children:"Как стилизовать ECharts под тему Admiral DS и подключать чарты двумя способами: нативно через CustomChart и через обертку ReactChart (echarts-for-react)."}),e.jsxs("section",{children:[e.jsx("h2",{children:"Базовые стили от темы"}),e.jsxs("p",{children:["Получите тему (",e.jsx("code",{children:"useTheme() || LIGHT_THEME"}),") и задайте глобальный textStyle. Пример ниже использует бар-чарт из SeriesLayoutByColumnOrRow:"]}),e.jsx("pre",{style:{padding:12,background:o,borderRadius:8,overflow:"auto",color:i,border:`1px solid ${r.color?.["Neutral/Neutral 20"]??"#e0e0e0"}`},children:`const axisLabelStyle = {
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
};`}),e.jsx("p",{children:"Локально переопределяйте только отличия (например, fontWeight для title), без дублирования fontFamily."})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Вариант 1. Нативный ECharts (customCharts)"}),e.jsx(n,{option:t,size:{width:520,height:360},"aria-label":"Пример нативного чарта"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Полный контроль: init/setOption/resize внутри CustomChart."}),e.jsx("li",{children:"События через onEvents."}),e.jsx("li",{children:"Подходит, если нужен точный контроль жизненного цикла."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Вариант 2. React обертка (ReactChart)"}),e.jsx(c,{option:t,style:{width:520,height:360},opts:{renderer:"svg"},onEvents:{click:()=>{}}}),e.jsxs("ul",{children:[e.jsx("li",{children:"echarts-for-react сам обновляет чарт при смене option."}),e.jsx("li",{children:"Меньше кода и быстрый старт."}),e.jsx("li",{children:"Настройки через props: opts, notMerge, onEvents и т.д."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Что выбрать"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Нужен тонкий контроль — CustomChart (нативный путь)."}),e.jsx("li",{children:"Нужно быстро и просто — ReactChart (обертка echarts-for-react)."})]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Когда выбрать нативный ECharts или ReactChart"}),e.jsxs("ul",{children:[e.jsx("li",{children:"CustomChart (нативный) — если нужен полный контроль init/setOption, ручное управление жизненным циклом и тонкие настройки."}),e.jsx("li",{children:"ReactChart — если важен быстрый старт, меньше кода, автоматическое обновление и стандартные сценарии с событиями."})]})]})]})},l={render:x,name:"Гайд: стилизация и подключение"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: GuideContent,
  name: "Гайд: стилизация и подключение"
}`,...l.parameters?.docs?.source}}};const C=["Guide"];export{l as Guide,C as __namedExportsOrder,m as default};

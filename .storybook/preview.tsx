import type { Preview } from "@storybook/react-vite";
import type { ReactRenderer } from "@storybook/react";
import type { DecoratorFunction } from "storybook/internal/types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { DARK_THEME, FontsVTBGroup, LIGHT_THEME } from "@admiral-ds/react-ui";

const GlobalStyles = createGlobalStyle`
    body {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    /* Base preview iframe background */
    html, body, #storybook-root {
      background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }

    /* Docs mode containers (Storybook 1/8 classes) */
    .docs-story {
      background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
`;

const withThemeProvider: DecoratorFunction<ReactRenderer> = (
  Story,
  context
) => {
  const theme = context.globals.theme === "dark" ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontsVTBGroup />
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Admiral DS global theme",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;

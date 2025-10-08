import type { Preview } from "@storybook/react-vite";
import type { ReactRenderer } from "@storybook/react";
import type { DecoratorFunction } from "storybook/internal/types";
import { ThemeProvider } from "styled-components";
import { DARK_THEME, LIGHT_THEME } from "@admiral-ds/react-ui";

const withThemeProvider: DecoratorFunction<ReactRenderer> = (
  Story,
  context
) => {
  const theme = context.globals.theme === "dark" ? DARK_THEME : LIGHT_THEME;

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

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

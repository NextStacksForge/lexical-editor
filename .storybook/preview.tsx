import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Assurez-vous que le chemin est correct
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { themes } from "@storybook/theming";
import * as DocBlock from "@storybook/blocks";
import * as React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "light",
    },
    docs: {
      toc: true,
      theme: themes.dark,
      page: () => (
        <>
          <DocBlock.Title />
          <DocBlock.Subtitle />
          <DocBlock.Description />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
    tags: ["autodocs"],
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light", 
      attributeName: "data-mode",
    }),
  ],
};

export default preview;

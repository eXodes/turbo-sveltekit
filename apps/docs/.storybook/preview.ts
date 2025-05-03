import "../src/app.css";
import LocaleDecorator from "./decorators/locale.svelte";
import type { Preview } from "@storybook/svelte";

const preview: Preview = {
  // @ts-expect-error - Storybook does not yet support Svelte 5 type
  decorators: [() => LocaleDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /date$/i,
      },
    },
  },
};

export default preview;

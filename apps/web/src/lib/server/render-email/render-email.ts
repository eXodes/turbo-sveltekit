import type { Component, ComponentProps } from "svelte";
import { renderAsPlainText } from "svelte-email-tailwind";
import { render } from "svelte/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RenderEmailParams<ComponentType extends Component<any, any, string>> {
  component: Component<ComponentProps<ComponentType>>;
  props: ComponentProps<ComponentType>;
}

interface RenderEmailReturn {
  html: string;
  plainText: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function renderEmail<ComponentType extends Component<any, any, string>>({
  component,
  props,
}: RenderEmailParams<ComponentType>): RenderEmailReturn {
  const { html } = render(component, {
    props: props satisfies ComponentProps<typeof component>,
  });

  const plainText = renderAsPlainText(html);

  return { html, plainText };
}

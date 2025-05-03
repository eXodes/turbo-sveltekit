<script
  lang="ts"
  module
>
  import Button from "./button.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "@storybook/test";
  import { createRawSnippet } from "svelte";

  const { Story } = defineMeta({
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      children: createRawSnippet(() => ({
        render: () => "Click me",
      })),
      onclick: fn(),
    },
  });
</script>

<!-- Extending Bits UI Button Component -->
<Story name="Default" />

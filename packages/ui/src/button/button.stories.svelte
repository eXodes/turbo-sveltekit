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
    parameters: {
      docs: {
        description: {
          component: "Extending Bits UI Button Component",
        },
      },
    },
    tags: ["autodocs"],
    argTypes: {
      color: {
        control: { type: "select" },
        options: ["default", "primary"],
      },
      size: {
        control: { type: "select" },
        options: ["small", "medium", "large"],
      },
    },
    args: {
      color: "default",
      size: "medium",
      children: createRawSnippet(() => ({
        render: () => "Click me",
      })),
      onclick: fn(),
    },
  });
</script>

<Story name="Default" />

<Story
  name="Primary"
  args={{
    color: "primary",
  }}
/>

<Story
  name="Small"
  args={{
    size: "small",
  }}
/>

<Story
  name="Medium"
  args={{
    size: "medium",
  }}
/>

<Story
  name="Large"
  args={{
    size: "large",
  }}
/>

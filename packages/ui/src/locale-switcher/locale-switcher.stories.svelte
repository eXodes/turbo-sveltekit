<script
  lang="ts"
  module
>
  import LocaleSwitcher from "./locale-switcher.svelte";
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "@storybook/test";

  const { Story } = defineMeta({
    title: "UI/LocaleSwitcher",
    component: LocaleSwitcher,
    tags: ["autodocs"],
    argTypes: {},
    args: {
      browser: true,
      invalidate: fn(),
    },
  });
</script>

<!-- Dropdown to change locale value through cookie -->
<Story name="Default" />

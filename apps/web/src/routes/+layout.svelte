<script lang="ts">
  import { browser } from "$app/environment";
  import { invalidate } from "$app/navigation";
  import "../app.css";
  import type { LayoutData } from "./$types";
  import { setLocale } from "locale/i18n-svelte";
  import type { Snippet } from "svelte";
  import { LocaleSwitcher } from "ui";

  interface Props {
    children: Snippet;
    data: LayoutData;
  }

  let { children, data }: Props = $props();

  setLocale(data.locale);
</script>

<main class="flex min-h-dvh w-full flex-col">
  <div class="absolute top-4 right-4">
    <LocaleSwitcher
      {browser}
      {invalidate}
    />
  </div>

  {@render children()}
</main>

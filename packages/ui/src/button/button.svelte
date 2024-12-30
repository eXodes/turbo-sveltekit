<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  interface Props extends HTMLButtonAttributes {
    children: Snippet;
  }

  const { children, ...props }: Props = $props();
</script>

<button
  class="inline-flex min-h-10 items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-orange-50 hover:bg-orange-500 active:scale-98 active:transition-all"
  {...props}
>
  {@render children()}
</button>

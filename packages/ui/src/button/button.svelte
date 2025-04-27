<script lang="ts">
  import { Button, type ButtonRootProps } from "bits-ui";
  import type { Snippet } from "svelte";

  const { children, ...props }: ButtonRootProps & { children: Snippet } = $props();
</script>

<Button.Root
  {...props}
  class="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-orange-50 shadow-md shadow-orange-500/75 transition hover:bg-orange-500 active:scale-98 {props.class}"
>
  {@render children()}
</Button.Root>

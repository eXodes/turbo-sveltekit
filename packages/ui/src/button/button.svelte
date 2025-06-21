<script
  module
  lang="ts"
>
  import { type VariantProps, tv } from "tailwind-variants";

  export const button = tv({
    base: "inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg font-semibold shadow-md transition active:scale-98",
    variants: {
      color: {
        default: "bg-gray-200 text-gray-800 hover:bg-gray-100 shadow-gray-300/75",
        primary: "bg-orange-600 text-orange-50 hover:bg-orange-500 shadow-orange-500/75",
      },
      size: {
        small: "px-3 py-1.5 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      color: "default",
      size: "medium",
    },
  });

  export type ButtonVariant = VariantProps<typeof button>;
</script>

<script lang="ts">
  import { Button, type ButtonRootProps } from "bits-ui";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "tailwind-variants";

  const {
    children,
    ...props
  }: ButtonRootProps & ButtonVariant & { class?: ClassValue; children: Snippet } = $props();
</script>

<Button.Root
  {...props}
  class={button(props)}
>
  {@render children()}
</Button.Root>

<script lang="ts">
  import { SvelteIcon } from "assets";
  import { Button } from "ui";
  import { Counter } from "utils";

  const counter = new Counter();
</script>

<svelte:head>
  <title>Web</title>
</svelte:head>

<div class="flex flex-1 flex-col items-center justify-center gap-10">
  <img
    src={SvelteIcon}
    alt="Svelte logo"
    class="h-32 w-32"
  />

  <h1 class="text-xl">Welcome to the Web app!</h1>

  <div class="flex flex-col items-center gap-2">
    <p>Counter: {counter.count}</p>
    <Button onclick={() => counter.increment()}>Click me!</Button>
  </div>
</div>

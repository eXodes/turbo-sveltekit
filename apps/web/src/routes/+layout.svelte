<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<main class="flex min-h-dvh w-full flex-col">
  {@render children()}
</main>

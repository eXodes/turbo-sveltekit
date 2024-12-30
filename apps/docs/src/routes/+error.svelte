<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status}</title>
</svelte:head>

<div class="flex flex-1 flex-col items-center justify-center gap-10">
  <h1 class="text-xl">
    {page.error?.message}
  </h1>
</div>

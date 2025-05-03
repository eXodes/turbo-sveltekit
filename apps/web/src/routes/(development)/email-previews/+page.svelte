<script lang="ts">
  import type { PageData } from "./$types";
  import PreviewInterface from "svelte-email-tailwind/preview/PreviewInterface.svelte";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Email Previews</title>
</svelte:head>

<PreviewInterface
  data={data.previewData}
  email=""
/>

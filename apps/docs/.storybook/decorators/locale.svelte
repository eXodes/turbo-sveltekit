<script lang="ts">
  import { setLocale } from "locale/i18n-svelte";
  import { detectLocale, isLocale } from "locale/i18n-util";
  import { loadLocaleAsync } from "locale/i18n-util.async";
  import { type Snippet, onMount } from "svelte";
  import { initDocumentCookieDetector } from "typesafe-i18n/detectors";

  let { children }: { children: Snippet } = $props();

  onMount(async () => {
    const detectedLocale = detectLocale(initDocumentCookieDetector("lang"));
    const locale = isLocale(detectedLocale) ? detectedLocale : "en";

    await loadLocaleAsync(locale);

    setLocale(locale);
  });
</script>

<div>
  {@render children()}
</div>

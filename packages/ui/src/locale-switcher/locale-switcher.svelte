<script lang="ts">
  import Cookies from "js-cookie";
  import { LL, locale, setLocale } from "locale/i18n-svelte";
  import type { Locales } from "locale/i18n-types";
  import { locales } from "locale/i18n-util";
  import { loadLocaleAsync } from "locale/i18n-util.async";

  interface Props {
    browser: boolean;
    invalidate: (resource: string | URL) => void;
  }

  let { browser, invalidate }: Props = $props();

  const COOKIE_EXPIRATION = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds

  const switchLocale = async (newLocale: Locales) => {
    if (!newLocale || $locale === newLocale) return;

    await loadLocaleAsync(newLocale);

    setLocale(newLocale);

    invalidate("app:locale");
  };

  const updateLocalHandler = async (e: Event) => {
    const newLocale = (e.target as HTMLSelectElement).value as Locales;
    await switchLocale(newLocale);

    Cookies.set("lang", newLocale, { expires: new Date(Date.now() + COOKIE_EXPIRATION) });

    if (browser) document.querySelector("html")!.setAttribute("lang", $locale);
  };
</script>

<select
  aria-label={$LL.lang()}
  class="rounded-lg text-sm focus-visible:border-orange-600 focus-visible:ring-orange-600"
  onchange={updateLocalHandler}
>
  {#each locales as l (l)}
    <option
      selected={l === $locale}
      value={l}
    >
      {l.toUpperCase()}
    </option>
  {/each}
</select>

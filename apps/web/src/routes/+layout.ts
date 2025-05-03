import type { LayoutLoad } from "./$types";
import type { Locales } from "locale/i18n-types";
import { loadLocaleAsync } from "locale/i18n-util.async";

export const load: LayoutLoad<{ locale: Locales }> = async ({ data: { locale }, depends }) => {
  depends("app:locale");
  await loadLocaleAsync(locale);

  return { locale };
};

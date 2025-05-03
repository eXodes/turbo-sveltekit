import { type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import type { Locales } from "locale/i18n-types";
import { detectLocale, i18n, isLocale } from "locale/i18n-util";
import { loadAllLocales } from "locale/i18n-util.sync";

loadAllLocales();
const L = i18n();

const translate: Handle = async ({ event, resolve }) => {
  const lang: Locales = (event.cookies.get("lang") as Locales) ?? detectLocale();

  const locale = isLocale(lang) ? lang : "en";
  const LL = L[locale];

  event.locals.locale = locale;
  event.locals.LL = LL;

  return resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", locale) });
};

export const handle = sequence(translate);

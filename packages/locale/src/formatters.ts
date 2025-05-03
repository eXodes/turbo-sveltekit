import type { Formatters, Locales } from "./i18n-types.js";
import type { FormattersInitializer } from "typesafe-i18n";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const initFormatters: FormattersInitializer<Locales, Formatters> = (locale: Locales) => {
  const formatters: Formatters = {
    // add your formatter functions here
  };

  return formatters;
};

import type { Locales, TranslationFunctions } from "locale/i18n-types";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: Locales;
      LL: TranslationFunctions;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};

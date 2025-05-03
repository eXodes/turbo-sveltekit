import { dev } from "$app/environment";
import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: LayoutServerLoad = async () => {
  if (!dev) return error(404, { message: "Not found" });

  return {};
};

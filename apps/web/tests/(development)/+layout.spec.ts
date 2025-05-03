import { expect, test } from "@playwright/test";

test("has expected not found page", async ({ page }) => {
  await page.goto("/email-previews");

  await expect(page).toHaveTitle(/404/);
});

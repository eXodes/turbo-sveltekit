import { expect, test } from "@playwright/test";

test("has expected title", async ({ page }) => {
  await page.goto("/email-previews");

  await expect(page).toHaveTitle(/404/);
});

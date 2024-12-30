import { expect, test } from "@playwright/test";

test.describe("Index (/)", () => {
  test("has expected title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Docs/);
  });

  test("has expected heading", async ({ page }) => {
    await page.goto("/");

    const Heading = page.getByRole("heading", { name: "Welcome to the Docs app!" });
    await expect(Heading).toBeVisible();
  });
});

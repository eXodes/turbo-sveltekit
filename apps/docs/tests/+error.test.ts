import { expect, test } from "@playwright/test";

test.describe("Error (/)", () => {
  test("has expected title", async ({ page }) => {
    await page.goto("/not-found");

    await expect(page).toHaveTitle(/404/);
  });

  test("has expected content", async ({ page }) => {
    await page.goto("/not-found");

    const Heading = page.getByRole("heading", {
      name: "Not Found",
    });
    await expect(Heading).toBeVisible();
  });
});

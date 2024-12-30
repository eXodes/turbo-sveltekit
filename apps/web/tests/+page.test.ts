import { expect, test } from "@playwright/test";

test.describe("Index (/)", () => {
  test("has expected title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Web/);
  });

  test("has expected heading", async ({ page }) => {
    await page.goto("/");

    const Heading = page.getByRole("heading", { name: "Welcome to the Web app!" });
    await expect(Heading).toBeVisible();
  });

  test("should increase counter count", async ({ page }) => {
    await page.goto("/");

    const Counter = page.getByText("Counter: 0");

    await expect(Counter).toBeVisible();

    const Button = page.getByRole("button", { name: "Click me!" });

    await Button.click();

    const IncreasedCounter = page.getByText("Counter: 1");

    await expect(IncreasedCounter).toBeVisible();
  });
});

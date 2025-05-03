import { expect, test } from "@playwright/test";

test.describe("Layout (/)", () => {
  test("should change locale", async ({ page }) => {
    await page.goto("/");

    const Language = page.getByRole("combobox", { name: "Language" });

    await expect(Language).toBeVisible();

    await Language.selectOption("ms");

    const Heading = page.getByRole("heading", { name: "Selamat datang ke aplikasi Web!" });
    await expect(Heading).toBeVisible();

    const Counter = page.getByText("Pembilang: 0");
    await expect(Counter).toBeVisible();

    const Button = page.getByRole("button", { name: "Klik saya!" });
    await expect(Button).toBeVisible();
  });
});

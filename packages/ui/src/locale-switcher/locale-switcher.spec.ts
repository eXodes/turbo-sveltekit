import LocaleSwitcher from "./locale-switcher.svelte";
import { render } from "@testing-library/svelte";
import { describe, expect, test, vi } from "vitest";

describe("LocaleSwitcher", () => {
  test("should render component", async () => {
    const { container } = render(LocaleSwitcher, {
      browser: false,
      invalidate: vi.fn(),
    });

    expect(container.children).toMatchSnapshot();
  });
});

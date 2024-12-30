import Button from "./button.svelte";
import { render, screen } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { createRawSnippet } from "svelte";
import { describe, expect, test, vi } from "vitest";

describe("Button", () => {
  test("should render component", async () => {
    const { container } = render(Button, {
      children: createRawSnippet(() => ({
        render: () => `<span>Button</span>`,
      })),
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should be able to click button", async () => {
    const onclick = vi.fn();

    render(Button, {
      children: createRawSnippet(() => ({
        render: () => `<span>Button</span>`,
      })),
      onclick,
    });

    const ButtonEl = screen.getByRole("button");

    await userEvent.click(ButtonEl);

    expect(onclick).toHaveBeenCalledTimes(1);
  });
});

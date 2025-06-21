import Button from "./button.svelte";
import { render, screen } from "@testing-library/svelte";
import { userEvent } from "@testing-library/user-event";
import { createRawSnippet } from "svelte";
import { describe, expect, test, vi } from "vitest";

describe("Button", () => {
  const children = createRawSnippet(() => ({
    render: () => `<span>Button</span>`,
  }));

  test("should render default button", async () => {
    const { container } = render(Button, {
      children,
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should render primary button", async () => {
    const { container } = render(Button, {
      children,
      color: "primary",
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should render small button", async () => {
    const { container } = render(Button, {
      children,
      size: "small",
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should render medium button", async () => {
    const { container } = render(Button, {
      children,
      size: "medium",
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should render large button", async () => {
    const { container } = render(Button, {
      children,
      size: "large",
    });

    expect(container.children).toMatchSnapshot();
  });

  test("should be able to click button", async () => {
    const onclick = vi.fn();

    render(Button, {
      children,
      onclick,
    });

    const ButtonEl = screen.getByRole("button");

    await userEvent.click(ButtonEl);

    expect(onclick).toHaveBeenCalledTimes(1);
  });
});

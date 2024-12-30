import { Counter } from "./counter.svelte";
import { describe, expect, test } from "vitest";

describe("Counter", () => {
  test("should return count and allow increment", async () => {
    const output = new Counter();

    expect(output.count).toMatchInlineSnapshot(`0`);

    output.increment();

    expect(output.count).toMatchInlineSnapshot(`1`);
  });
});

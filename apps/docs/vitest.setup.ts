import "@testing-library/jest-dom/vitest";
import { beforeAll, vi } from "vitest";

beforeAll(() => {
  // Mock CSS Animation
  Element.prototype.animate = vi.fn().mockImplementation(() => ({
    finished: Promise.resolve(),
    cancel: vi.fn(),
  }));

  mockEnv();
});

function mockEnv() {
  vi.mock("$env/static/public", async () => {
    return {};
  });

  vi.mock("$env/dynamic/public", async () => {
    return {
      env: {},
    };
  });
}

// Required for svelte5 + jsdom as jsdom does not support matchMedia
Object.defineProperty(globalThis, "matchMedia", {
  writable: true,
  enumerable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

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

import { describe, expect, it } from "bun:test";
import { isOdd } from "./index";

describe("isOdd", () => {
  it("should return true if the number is odd", () => {
    expect(isOdd(0)).toBe(false);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-1)).toBe(true);
    expect(isOdd(-3)).toBe(true);
    expect(isOdd(1.0e0)).toBe(true);
    expect(isOdd(9007199254740991)).toBe(true);
  });

  it("should throw an error when an invalid value is passed", () => {
    expect(() => isOdd(9007199254740992)).toThrow("value exceeds maximum safe integer");
  });
});

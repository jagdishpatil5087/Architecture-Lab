import { formatPrice } from "../formatPrice";

describe("formatPrice", () => {
  it("formats integer price correctly", () => {
    expect(formatPrice(100)).toBe("₹100.00");
  });

  it("formats decimal price correctly", () => {
    expect(formatPrice(99.5)).toBe("₹99.50");
  });
});

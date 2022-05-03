import { testFunction } from "./testFunction";

describe("testFunction()", () => {
  test("return value", () => {
    expect(testFunction()).toBe("test");
  });
});
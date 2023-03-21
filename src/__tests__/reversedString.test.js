import { reversedString } from "../reversedString.js";

describe("Test for reversedString function", () => {
  it("string reversal completed successfully", () => expect(reversedString("abc")).toBe("cba"));
});
import { getHelloMessage } from "../src/main";

describe("main.spec", () => {
  test("should get hello message", () => {
    const result = getHelloMessage("world");
    expect(result).toBe("hello world");
  });
});

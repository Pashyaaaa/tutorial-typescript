import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  test("should return hello vian", () => {
    expect(sayHello("vian")).toBe("Hello, vian!");
  });
});

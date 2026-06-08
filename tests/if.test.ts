describe("IF Statement Typescript", () => {
  it("should support if in ts", () => {
    const examValue: number = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 70) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });
  it("should support ternary statement", () => {
    const value: number = 80;
    const say = value >= 70 ? "Congratz" : "Try Again la bodo";

    console.info(say);
  });

  it("should support switch statement", () => {
    const sayHello = (name?: string): string => {
      switch (name) {
        case "Vian":
          return "Hi Vian";
        case "Eko":
          return "Hello Eko";
        default:
          return "Hello World-!";
      }
    };

    expect(sayHello("Vian")).toBe("Hi Vian");
    expect(sayHello("Eko")).toBe("Hello Eko");
    expect(sayHello()).toBe("Hello World-!");
  });
});

describe("Optional Parameter", () => {
  it("should support undefined and null", () => {
    function sayHello2(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info(`Hello Null`);
      }
    }

    sayHello2("Eko");
    const name: string | undefined = undefined;
    sayHello2(name);
    sayHello2(null);
  });
});

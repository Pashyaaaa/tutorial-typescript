describe("Function", () => {
  it("should support function in ts", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Vyanz")).toBe("Hello Vyanz");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Vyanz");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Vyanz")).toBe("Hello Vyanz");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      values.forEach((e) => {
        total += e;
      });
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Eko", "Kurniawan")).toBe("Hello Eko Kurniawan");
    expect(sayHello("Vian")).toBe("Hello Vian");
  });

  it("should support function overloading? overriding", () => {
    function callMeAndPlusOne(value: string): string;
    function callMeAndPlusOne(value: number): number;
    function callMeAndPlusOne(value: any) {
      if (typeof value == "string") {
        return `What if i call you ${value}?`;
      } else if (typeof value == "number") {
        return value + 12;
      }
    }

    expect(callMeAndPlusOne("Vian")).toBe("What if i call you Vian?");
    expect(callMeAndPlusOne(5)).toBe(17);
  });

  it("should support function as parameter (callback)", () => {
    function sayHello(name: string, ngebesarin: (name: string) => string) {
      return `Hello ${ngebesarin(name)}`;
    }

    const toUpper = (value: string) => {
      return value.toUpperCase();
    };

    expect(sayHello("Vian", toUpper)).toBe(`Hello VIAN`);
  });

  it("should support anonymous function as parameter (callback)", () => {
    function sayHello(name: string, ngebesarin: (name: string) => string) {
      return `Hello ${ngebesarin(name)}`;
    }

    expect(
      sayHello("Vian", (value: string): string => {
        return value.toUpperCase();
      }),
    ).toBe(`Hello VIAN`);
  });
});

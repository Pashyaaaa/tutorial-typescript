describe("Loop", () => {
  it("should support for loop", () => {
    const names: string[] = ["Vian", "Eko", "Zam"];

    for (let i = 0; i < names.length; i++) {
      const e = names[i];
      console.info(e);
    }

    for (const name in names) {
      if (!Object.hasOwn(names, name)) continue;

      const e = names[name];
      console.info(e);
    }

    for (const name of names) {
      console.info(name);
    }
  });

  it("should support while loop", () => {
    let counter = 0;
    while (counter < 10) {
      console.info(counter);
      counter++;
    }
  });

  it("should support do while loop", () => {
    let counter = 0;

    do {
      console.info(counter);
      counter++;
    } while (counter < 10);
  });

  it("should support break & continue", () => {
    let counter = 0;
    do {
      counter++;

      if (counter == 10) {
        break;
      }

      if (counter % 2 == 0) {
        continue;
      }

      console.info(counter);
    } while (true);
  });
});

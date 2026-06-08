describe("Array", () => {
  it("should must declare", () => {
    const names: string[] = ["Pashya", "Dimas", "Rizky"];
    const ages: number[] = [20, 21, 22];
    const isMarried: boolean[] = [false, true, false];

    console.info(names);
    console.info(ages);
    console.info(isMarried);
  });

  it("should support readonly array", () => {
    const hobbies: ReadonlyArray<string> = ["Game", "Coding", "Living"];
    console.info(hobbies);
  });

  it("should support tuple", () => {
    const person: readonly [string, number, boolean] = ["mike", 26, false];
    console.info(person);
  });
});

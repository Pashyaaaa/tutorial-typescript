describe("Object type", () => {
  it("should support in typescript", () => {
    const person: { id: string; name: string; description?: string } = {
      id: "1",
      name: "Jhon Doe",
    };
    console.info(person);
  });
});

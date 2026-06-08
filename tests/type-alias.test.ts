import type { Category, Product } from "../src/type-alias.js";

describe("type alias", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: "1",
      category_name: "Fruit",
    };

    const product: Product = {
      id: 1,
      product_name: "Orange",
      price: 3000,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});

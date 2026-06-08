import { CustomerType, type Customer } from "../src/enum.js";

describe("Enum", () => {
  test("should support enum", () => {
    const customer: Customer = {
      id: 1,
      cust_name: "Ridho",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});

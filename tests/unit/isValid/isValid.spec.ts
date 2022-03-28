import { FormInvoice } from "@/store/types";

import { isValid } from "@/store/utils";

describe("Is valid test", () => {
  test("Valid data", () => {
    const data: FormInvoice = {
      product_name: "Blahblah",
      price: 100,
      quantity: 5,
    };

    const result = isValid(data);

    expect(result).toBe(true);
  });
  test("Invalid data", () => {
    const data: FormInvoice = {
      product_name: "Blahblah",
      price: 100,
      quantity: undefined,
    };

    const result = isValid(data);

    expect(result).toBe(false);
  });
});

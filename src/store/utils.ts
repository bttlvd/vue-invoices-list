import { FormInvoice } from "./types";

export const isValid = (
  formData: FormInvoice
): formData is Required<FormInvoice> =>
  !Number.isNaN(Number(formData.quantity)) &&
  !Number.isNaN(Number(formData.price)) &&
  formData.product_name !== undefined;

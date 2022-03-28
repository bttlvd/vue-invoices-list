export interface Invoice {
  id: string;
  product_name: string;
  price: number;
  quantity: number;
}

export type FormInvoice = Partial<Omit<Invoice, "id">>;

type Order = {
  tran_id: string;
  name: string;
  email: string;
  product: string;
  amount: number;
  status: string;
};

export const orders: Record<string, Order> = {};
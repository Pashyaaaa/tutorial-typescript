export enum CustomerType {
  REGULAR = "REGULER",
  PLATINUM = "PLATINUM",
  GOLD = "GOLD",
}

export type Customer = {
  id: number;
  cust_name: string;
  type: CustomerType;
};

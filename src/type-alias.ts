export type ID = string | number;

export type Category = {
  id: ID;
  category_name: string;
  description?: string;
};

export type Product = {
  id: ID;
  product_name: string;
  price: number;
  category: Category;
};

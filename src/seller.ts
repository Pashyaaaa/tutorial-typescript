export type id_seller = string | number;

export interface Seller {
  id: id_seller;
  name: string;
  address?: string | null;
  readonly nim?: number;
  readonly nik: number;
}

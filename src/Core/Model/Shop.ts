export interface Shop {
  id: number;
  name: string;
  description: string;
  items_ids: string;
  buy_rate: number;
  sell_rate: number;
  asset_location: string;
}

export interface ShopModel {
  id: number;
  name: string;
  description: string;
  items_ids: number[];
  buy_rate: number;
  sell_rate: number;
  asset_location?: string;
}

export interface ShopDTOFromApi {
  id: number;
  name: string;
  description?: string;
  items_ids?: string;
  buy_rate?: number;
  sell_rate?: number;
  asset_location?: string;
}
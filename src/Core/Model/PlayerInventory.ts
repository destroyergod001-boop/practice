export interface Inventory {
  id: number;
  player_id: number;
  item_ids: string;
}

export interface InventoryModel {
  id: number;
  player_id: number;
  item_ids: Record<string, number>;
}

export interface InventoryDTOFromApi {
  id: number;
  player_id: number;
  item_ids?: string;
}
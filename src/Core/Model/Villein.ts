export interface Villein {
  id: number;
  name: string;
  description: string;
  tier: number;
  level: number;
  xp: number;
  gold: number;
  basic_equipent_item_ids: string;
  basic_ability_ids: string;
  basic_skill_ids: string;
  basic_stats: string;
  magic_armor: number;
  physical_armor: number;
  element_mastery: string;
  element_resistance: string;
  drop_item_ids: string;
  asset_location: string;
}

export interface VilleinModel {
  id: number;
  name: string;
  description: string;
  tier: number;
  level: number;
  xp: number;
  gold: number;
  basic_equipent_item_ids: number[];
  basic_ability_ids: number[];
  basic_skill_ids: number[];
  basic_stats: Record<string, number>;
  magic_armor: number;
  physical_armor: number;
  element_mastery: Record<string, number>;
  element_resistance: Record<string, number>;
  drop_item_ids: Record<string, number>;
  asset_location?: string;
}

export interface VilleinDTOFromApi {
  id: number;
  name: string;
  description?: string;
  tier?: number;
  level?: number;
  xp?: number;
  gold?: number;
  basic_equipent_item_ids?: string;
  basic_ability_ids?: string;
  basic_skill_ids?: string;
  basic_stats?: string;
  magic_armor?: number;
  physical_armor?: number;
  element_mastery?: string;
  element_resistance?: string;
  drop_item_ids?: string;
  asset_location?: string;
}
export interface Skill {
  id: number;
  name: string;
  description: string;
  tier: number;
  category: string;
  costType: string;
  cost: number;
  turn: number;
  gold: number;
  level: number;
  basic_effect_fixed_value: number;
  basic_effect_percentage_value: number;
  monster_id: number;
  monster_number: number;
  elements: string;
  basic_stats: string;
  requirement_stats: string;
  element_mastery: string;
  element_resistance: string;
  requirement_element_mastery: string;
  requirement_element_resistance: string;
  requirement_item?: number;
  asset_location: string;
}

export interface SkillModel {
  id: number;
  name: string;
  description: string;
  tier: number;
  category: string;
  costType: string;
  cost: number;
  turn: number;
  gold: number;
  level: number;
  basic_effect_fixed_value: number;
  basic_effect_percentage_value: number;
  monster_id: number;
  monster_number: number;
  elements: Record<string, number>;
  basic_stats: Record<string, number>;
  requirement_stats: Record<string, number>;
  element_mastery: Record<string, number>;
  element_resistance: Record<string, number>;
  requirement_element_mastery: Record<string, number>;
  requirement_element_resistance: Record<string, number>;
  requirement_item?: number;
  asset_location?: string;
}

export interface SkillDTOFromApi {
  id: number;
  name: string;
  description?: string;
  tier?: number;
  category?: string;
  costType?: string;
  cost?: number;
  turn?: number;
  gold?: number;
  level?: number;
  basic_effect_fixed_value?: number;
  basic_effect_percentage_value?: number;
  monster_id?: number;
  monster_number?: number;
  elements?: string;
  basic_stats?: string;
  requirement_stats?: string;
  element_mastery?: string;
  element_resistance?: string;
  requirement_element_mastery?: string;
  requirement_element_resistance?: string;
  requirement_item?: number | null;
  asset_location?: string;
}
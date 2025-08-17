export interface PlayerProfile {
  id: number;
  name: string;
  gender: "male" | "female" | "other";
  level: number;
  currentXp: number;
  newClassId: number;
  newRaceId: number;
  oldClassIds: string;
  oldRaceIds: string;
  inventoryId: number;
  equipmentId: number;
  skills: string;
  abilities: string;
  gold: number;
  current_node_id: number;
}

export interface PlayerProfileModel {
  id: number;
  name: string;
  gender: "male" | "female" | "other";
  level: number;
  currentXp: number;
  newClassId: number;
  newRaceId: number;
  oldClassIds: number[];
  oldRaceIds: number[];
  inventoryId: number;
  equipmentId: number;
  skills: number[];
  abilities: number[];
  gold: number;
  current_node_id: number;
}

export interface PlayerProfileDTOFromApi {
  id: number;
  name: string;
  gender?: string;
  level?: number;
  current_xp?: number;
  new_class_id?: number;
  new_race_id?: number;
  old_class_ids?: string;
  old_race_ids?: string;
  inventory_id?: number;
  equipment_id?: number;
  skills?: string;
  abilities?: string;
  gold?: number;
  current_node_id?: number;
}
export interface TotalStats {
  HP: number;
  MP: number;
  STR: number;
  DEX: number;
  INT: number;
  WIS: number;
  CON: number;
  AGI: number;
  LUK: number;
  CHA: number;
  magic_armor: number;
  physical_armor: number;

  Fire_mastery: number;
  Water_mastery: number;
  Air_mastery: number;
  Earth_mastery: number;
  Wood_mastery: number;
  Metal_mastery: number;
  Light_mastery: number;
  Dark_mastery: number;
  Ice_mastery: number;
  Thunder_mastery: number;
  Life_mastery: number;
  Death_mastery: number;
  Physical_mastery: number;
  Magical_mastery: number;
  Void_mastery: number;
  Chaos_mastery: number;

  Fire_resist: number;
  Water_resist: number;
  Air_resist: number;
  Earth_resist: number;
  Wood_resist: number;
  Metal_resist: number;
  Light_resist: number;
  Dark_resist: number;
  Ice_resist: number;
  Thunder_resist: number;
  Life_resist: number;
  Death_resist: number;
  Physical_resist: number;
  Magical_resist: number;
  Void_resist: number;
  Chaos_resist: number;
}

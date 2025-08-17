export interface Element {
  id: number;
  name: string;
  description: string;
  weakness_id1: number;
  weakness_id2: number;
  color: string;
}

export interface ElementModel {
  id: number;
  name: string;
  description: string;
  weakness_id1: number;
  weakness_id2: number;
  color: string;
}

export interface ElementDTOFromApi {
  id: number;
  name: string;
  description?: string;
  weakness_id1?: number;
  weakness_id2?: number;
  color?: string;
}
export interface Stat {
  id: number;
  name: string;
  description: string;
  short_name: string;
}

export interface StatModel {
  id: number;
  name: string;
  description: string;
  short_name: string;
}

export interface StatDTOFromApi {
  id: number;
  name: string;
  description?: string;
  short_name?: string;
}
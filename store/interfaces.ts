export interface Entry {
  id?: number;
  high: string;
  low: string;
  rating: number;
  date?: Date;
}

export interface Rating {
  rate: number;
  count: number;
}

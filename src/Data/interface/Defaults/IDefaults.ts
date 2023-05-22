export interface IDefaults {
  get: string;
  parameters: any;
  errors: any[];
  results: number;
  paging: IPaging;
}

export interface IPaging {
  current: number
  total: number
}

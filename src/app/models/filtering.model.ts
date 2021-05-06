export interface FilterButton {
  type: Filter;
  lable: string;
  isActive: boolean;
}

export enum Filter {
  All,
  Active,
  Completed,
}

export type OptionType = {
  idx: number; // in array
  id?: number; // unique number
  key?: string; // uniaue string
  text?: string; // can be murkuped
  [key: string]: any;
};
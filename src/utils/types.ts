// todo: replace wuth TOption
export type OptionType = {
  idx: number; // in array
  id?: number; // unique number
  key?: string; // uniaue string
  text?: string; // can be murkuped
  [key: string]: any;
};

export type TOption = {
  i: number;
  text?: string;
  [key: string]: any;
};

type FuncPropsNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

export type FuncProps<T> = Pick<T, FuncPropsNames<T>>;

type NonFuncPropsNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

export type NonFuncProps<T> = Pick<T, NonFuncPropsNames<T>>;

export type KeysOf<T> = keyof T;

export type Unite<T1, T2> = T1 & Omit<T2, keyof T1>; // supply
export type Merge<T1, T2> = Omit<T1, keyof T2> & T2; // replace

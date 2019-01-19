export type StringMap<T> = {
  [key:string]: T;
};

export type Pack = {
  name: string;
  className: string;
  weapon: Weapon;
};

export enum Ammo {
  '_9' = '9',
  '_12' = '12',
  '_45' = '45',
  '_50' = '50',
  '_556' = '556',
  '_762' = '762',
  '_408' = '408',
}

export enum WeaponType {
  PISTOL = 'PISTOL',
  SHOTGUN = 'SHOTGUN',
  SMG = 'SMG',
  LMG = 'LMG',
  AR = 'AR',
  SNIPER = 'SNIPER',
}

export type Weapon = {
  name: string;
  ammo: Ammo,
  type: WeaponType,
  crate?: boolean;
};

export type Challenge = {
  map: string;
  pack: Pack;
  weapons: Weapon[];
};

export type GameMap = {
  name: string;
  data: any;
};